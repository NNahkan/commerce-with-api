import React, { Component } from "react";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import CommerceService from "../service";

const commerce = new CommerceService();
class Commerce extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			loading: false,
			error: false,
		}
	}

	componentDidMount() {
		this.setState({
			loading: true,
			error: false
		})
		commerce.fetchProducts().then(
			(res) => {
				if (res && res.response.ok) {
					this.setState({
						data: res.data,
						loading: false
					})
				} else {
					this.setState({ loading: false})
				}
			},
			(error) => {
				this.setState({
					loading: false,
					error: true
				})
			}
		)
	}

	

  render() {
	const { loading, error, data } = this.state;
    return (
      <>
        <Navbar/>
        <div className="container">
			{!loading ? (
				<Home
				data={data}/>
			) : (
				<div>Loading...</div>
			)}
		  </div>
		  {error && <h3> Error loading data</h3>}
      </>
    );
  }
}

export default Commerce;

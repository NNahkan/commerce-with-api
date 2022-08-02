import React, { Component } from "react";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import CommerceService from "../service";
import { variables } from "../Javascript/StateVariables";

const INIT_CARD = variables;

const commerce = new CommerceService();
class Commerce extends Component {
	constructor() {
		super();
		this.state = {
			commerce: INIT_CARD,
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

	updateState = (name, state, func) => {
		this.setState((prevState) => ({
			[name]: {
				...prevState[name],
				...state,
			},
		}),
		func
		);
	};

	updateSubState = (name, sub, state, func) => {
		this.setState((prevState) => ({
			[name]: {
				...prevState[name],
				[sub]: {
					...prevState[name][sub],
					...state,
				},
			},
		}),
		func
		);
	};

	updateCart = (state, func) =>
        this.updateSubState("commerce", "cart", state, func);


	
	

  render() {
	const { loading, error, data } = this.state;
    return (
      <>
        <Navbar/>
        <div className="container">
			{!loading ? (
				<Home
				updateCart={this.updateCart}
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

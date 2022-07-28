import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import s from "./Home.module.css";
import Products from "./Products/Products";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
		searchData: []
    };
  }

  searchButton = ({ target: { name } }) => {
    this.setState({ search: name });
    this.searchFilter();
  };

  searchUser = ({ target: { value } }) => {
    this.setState({ search: value });
    console.log(this.state.search);
	 this.searchFilter();
  };  

  searchFilter = () => {
		if (this.state.search === "all") {
			this.setState({
				searchData : this.props.data
			})
		} else {
			this.setState({
				searchData : this.props.data.filter(item => item.description.includes(this.state.search))
			})
		}
  }

  render() {
    
	const data = this.props.data;

    return (
      <div className="container">
        <Searchbar
		   searchUser={this.searchUser} 
		   searchButton={this.searchButton} />
        <div className={s.portfolioGrid}>
          {data.map((item) => (
              <Products item={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;

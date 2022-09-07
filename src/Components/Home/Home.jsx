import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import s from "./Home.module.css";
import Products from "./Products/Products";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      searchData: [],
    };
  }

  updateSubState = (name, sub, state, func) =>
    this.props.updateSubState(name, sub, state, func);

  searchUser = ({ target: { value } }) => {
    this.setState({ search: value });
  };


  render() {
    const { data, commerce } = this.props;
    const { search } = this.state;

    return (
      <div className="container">
        <Searchbar searchUser={this.searchUser} search={search} />
        <div className={s.portfolioGrid}>
          {data

            .sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            })
            .filter(
              (item) => {
					const searchLower = search.toLowerCase()
                if ( searchLower === '') {
						return item
					 } else if (item.name.toLowerCase().includes(searchLower) || item.category.toLowerCase().includes(searchLower)){
						return item
					 }
              }
              /* this.searchFilter(item.name.toLowerCase(), search) ||
                item.category.toLowerCase().includes(search.toLowerCase()) */
            )

            .map((item, index) => (
              <Products
                cart={commerce.cart}
                updateCart={this.props.updateCart}
                key={index}
                item={item}
                deleteCart={this.props.deleteCart}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Home;

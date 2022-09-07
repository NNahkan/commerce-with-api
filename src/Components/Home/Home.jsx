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

  searchFilter = (searchString, item) => {
    const stringArray = searchString.split(" ");
    return stringArray.some((word) => word.includes(item.toLowerCase()))
      ? true
      : false;
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
              (item) =>
                this.searchFilter(item.name.toLowerCase(), search) ||
                item.category.toLowerCase().includes(search.toLowerCase())
            )

            .map((item, index) => (
              <Products
                cart={commerce.cart}
                updateCart={this.props.updateCart}
                stateDeneme={this.props.stateDeneme}
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

import React, { Component } from "react";
import ItemContainer from "./ItemContainer/ItemContainer";

class Cart extends Component {
  render() {
    return (
      <div className="secondContainer">
        <ItemContainer
		  cart={this.props.cart}
		  />
        <div className="rightContainer">Summary</div>
      </div>
    );
  }
}

export default Cart;

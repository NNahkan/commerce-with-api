import React, { Component } from "react";
import Summary from "../Summary/Summary";
import ItemContainer from "./ItemContainer/ItemContainer";

class Cart extends Component {
  render() {
    return (
      <div className="secondContainer">
        <ItemContainer
          updateItem={this.props.updateItem}
          cart={this.props.cart}
          deleteCart={this.props.deleteCart}
        />
        <Summary 
		  cart={this.props.cart} 
		  />
      </div>
    );
  }
}

export default Cart;

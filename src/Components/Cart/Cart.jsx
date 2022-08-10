import React, { Component } from "react";
import Summary from "../Summary/Summary";
import ItemContainer from "./ItemContainer/ItemContainer";

class Cart extends Component {
  render() {
    return (
      <div className="secondContainer">
        <ItemContainer
          updateDisplay={this.props.updateDisplay}
          updateItem={this.props.updateItem}
          cart={this.props.cart}
          deleteCart={this.props.deleteCart}
        />
        <Summary
          cart={this.props.cart}
			 displayScreens={this.props.displayScreens}
			 updateDisplay={this.props.updateDisplay}
        />
      </div>
    );
  }
}

export default Cart;

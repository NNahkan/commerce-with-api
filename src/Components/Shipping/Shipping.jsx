import React, { Component } from "react";
import Summary from "../Summary/Summary";
import ShipContainer from "./ShipContainer/ShipContainer";

class Shipping extends Component {
  render() {
    return (
      <div className="secondContainer">
        <ShipContainer
          updateShipping={this.props.updateShipping}
          updateSubState={this.props.updateSubState}
          updateDisplay={this.props.updateDisplay}
        />
        <Summary
          cart={this.props.commerce.cart}
          delivery={this.props.commerce.shipping.delivery}
			 displayScreens={this.props.displayScreens}
			 updateDisplay={this.props.updateDisplay}
        />
      </div>
    );
  }
}

export default Shipping;

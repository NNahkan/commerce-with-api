import React, { Component } from "react";
import Summary from "../Summary/Summary";
import ShipContainer from "./ShipContainer/ShipContainer";

class Shipping extends Component {
  render() {
    return (
      <div className="secondContainer">
        <ShipContainer 
		 updateShipping={this.props.updateShipping} 
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

export default Shipping;

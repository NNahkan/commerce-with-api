import React, { Component } from "react";
import Summary from "../Summary/Summary";
import ShipContainer from "./ShipContainer/ShipContainer";

class Shipping extends Component {
	constructor() {
		super();
		this.state = {
			 shippingButton: true,
		};
  }

  updateButton = (boolean) => {
	this.setState({shippingButton: boolean})
  }

  render() {
	const {shippingButton} = this.state;
    return (
      <div className="secondContainer">
        <ShipContainer
		  updateButton = {this.updateButton}
          updateShipping={this.props.updateShipping}
          updateSubState={this.props.updateSubState}
          updateDisplay={this.props.updateDisplay}
        />
        <Summary
          commerce={this.props.commerce}
          updateDisplay={this.props.updateDisplay}
			 shippingButton = {shippingButton}
        />
      </div>
    );
  }
}

export default Shipping;

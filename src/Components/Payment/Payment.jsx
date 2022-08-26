import React, { Component } from "react";
import Summary from "../Summary/Summary";
import PaymentContainer from "./PaymentContainer/PaymentContainer";

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      paymentButton: true,
    };
  }

  updateButton = (boolean) => {
    this.setState({ paymentButton: boolean });
  };

  render() {
    const { paymentButton } = this.state;
    return (
      <div className="secondContainer">
        <PaymentContainer
          updatePayment={this.props.updatePayment}
          updateButton={this.updateButton}
          updateDisplay={this.props.updateDisplay}
        />
        <Summary
          commerce={this.props.commerce}
          updateDisplay={this.props.updateDisplay}
          paymentButton={paymentButton}
        />
      </div>
    );
  }
}

export default Payment;

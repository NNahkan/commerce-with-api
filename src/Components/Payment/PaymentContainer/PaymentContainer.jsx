import React, { Component } from "react";
import {
  cardExpireValidation,
  cardNumberValidation,
  onlyTextValidation,
  securityCodeValidation,
} from "../../Javascript/Validations";
import PaymentItem from "./PaymentItem/PaymentItem";
import { OTHERCARDS } from "../../Javascript/cardConst";

const INIT_CARD = {
  card: "",
  cardHolder: "",
  expiry: "",
  securityCode: "",
};

class PaymentContainer extends Component {
  constructor() {
    super();
    this.state = {
      cardData: INIT_CARD,
      cardType: null,
      maxLength: OTHERCARDS.length,
      error: {},
    };
  }

  updateDisplay = (display) => this.props.updateDisplay(display);

  updateState = (name, state, func) => {
    this.setState(
      (prevState) => ({
        [name]: {
          ...prevState[name],
          ...state,
        },
      }),
      func
    );
  };

  findDebitCardType = (cardNumber) => {
    const regexPattern = {
      MASTERCARD: /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/,
      VISA: /^4[0-9]{2,}$/,
      AMERICAN_EXPRESS: /^3[47][0-9]{5,}$/,
      DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{3,}$/,
    };
    for (const card in regexPattern) {
      if (cardNumber.replace(/[^\d]/g, "").match(regexPattern[card]))
        return card;
    }
    return "";
  };

  handleInputData = ({ target: { name, value } }) => {
    const updateState = this.updateState;
    if (name === "card") {
      let mask = value.split(" ").join("");
      if (mask.length) {
        mask = mask.match(new RegExp(".{1,4}", "g")).join(" "); // Alien
        updateState("cardData", { [name]: mask });
      } else {
        updateState("cardData", { [name]: "" });
      }
    } else {
      updateState("cardData", { [name]: value });
    }
  };

  handleBlur = ({ target: { name, value } }) => {
    this.handleValidation(name, value);
  };

  buttonCheck = () => {
	const { payment } = this.state;
	const buttonBoolean = Object.keys(payment).every(
	  (item) => payment[item].length
	);
	buttonBoolean === true
	  ? this.props.updateButton(false)
	  : this.props.updateButton(true);
 };

  handleValidation = (name, value) => {
	// this.buttonCheck();
    let errorText;
    const handVal = (valid) => {
      errorText = valid(value);
      this.updateState("error", { [`${name}Error`]: errorText });
      this.setState({ cardType: this.findDebitCardType(value) });
    };

    switch (name) {
      case "card":
        handVal(cardNumberValidation);
        break;
      case "cardHolder":
        handVal(onlyTextValidation);
        break;
      case "expiry":
        handVal(cardExpireValidation);
        break;
      case "securityCode":
        handVal(securityCodeValidation);
        break;
      default:
        break;
    }
  };

//   handleAddCard = (e) => {
// 	e.preventDefault();
// 	const arr = this.state;
// 	const errorCheck = this.checkErrorBeforeSave();
// 	if (!errorCheck) {
// 	  this.props.updatePayment({
// 		 payment: arr
// 	  });
// 	}
//  };

  render() {
    const { cardData, cardType, error, maxLength } = this.state;

    const inputData = [
      { label: "Card Number", name: "card", type: "text", error: "cardError" },
      {
        label: "CardHolder's Name",
        name: "cardHolder",
        type: "text",
        error: "cardHolderError",
      },
      {
        label: "Expiry Date (MM/YY)",
        name: "expiry",
        type: "text",
        error: "expiryError",
      },
      {
        label: "Security Code",
        name: "securityCode",
        type: "text",
        error: "securityCodeError",
      },
    ];

    return (
      <div className="leftContainer">
        <h2>Payment</h2>
        <form
         //  onSubmit={this.handleAddCard}
          id="paymentForm"
          className="dataForm"
        >
          {inputData.length
            ? inputData.map((item, ind) => (
                <PaymentItem
                  autoComplete="off"
                  key={ind}
                  name={item.name}
                  type={item.type}
                  placeholder={item.label}
                  value={cardData && cardData[item.name]}
                  onChange={this.handleInputData}
                  onBlur={this.handleBlur}
						maxLength={maxLength}
                  cardType={cardType}
						isCard={item.name === 'card'}
                  error={error}
                  errorM={
                    error && error[item.error] && error[item.error].length > 1
                      ? error[item.error]
                      : null
                  }
                />
              ))
            : null}
        </form>
        <button
          onClick={() => this.updateDisplay("shipping")}
          className="btn btn-menu"
        >
          Back to Cart
        </button>
      </div>
    );
  }
}

export default PaymentContainer;

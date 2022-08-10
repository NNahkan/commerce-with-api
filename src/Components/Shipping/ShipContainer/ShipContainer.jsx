import React, { Component } from "react";
import {
  onlyTextValidation,
  phoneValidation,
  postcodeValidation,
} from "../../Javascript/Validations";
import s from "./ShipContainer.module.css";
import ShipItem from "./ShipItem/ShipItem";

const INIT_CARD = {
  shippingInfo: {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    phoneNumber: "",
    delivery: "",
  },
  error: {},
  generalError: false,
};

class ShipContainer extends Component {
  constructor() {
    super();
    this.state = {
      shippingInfo: {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        country: "",
        zip: "",
        phoneNumber: "",
        delivery: "",
      },
      error: {},
      generalError: false,
    };
  }

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

  handleInputData = ({ target: { name, value } }) => {
    console.log(onlyTextValidation("a"));
    this.setState((prevState) => ({
      shippingInfo: {
        ...prevState.shippingInfo,
        [name]: value,
      },
    }));
  };

  handleBlur = ({ target: { name, value } }) => {
    this.handleValidation(name, value);
  };

  handleValidation = (name, value) => {
    let errorText;
    const handval = (valid) => {
      errorText = valid(value);
      this.updateState("error", { [`${name}Error`]: errorText });
    };
    switch (name) {
      case "firstName":
      case "lastName":
      case "city":
      case "state":
        handval(onlyTextValidation);
        break;
      case "zip":
        handval(postcodeValidation);
        break;
      case "phoneNumber":
        handval(phoneValidation);
        break;
      default:
        break;
    }
  };

  render() {
    const { shippingInfo, error } = this.state;
    const {
      firstName,
      lastName,
      address,
      city,
      state,
      country,
      zip,
      phoneNumber,
      delivery,
    } = shippingInfo;
    const inputData = [
      {
        label: "First Name",
        name: "firstName",
        type: "text",
        error: "firstNameError",
      },
      {
        label: "Last Name",
        name: "lastName",
        type: "text",
        error: "lastNameError",
      },
      {
        label: "Your Address",
        name: "address",
        type: "text",
        error: "addressError",
      },
      { label: "City/Town", name: "city", type: "text", error: "cityError" },
      {
        label: "State/Province",
        name: "state",
        type: "text",
        error: "stateError",
      },
      {
        label: "Country",
        name: "country",
        type: "select",
        error: "CountryError",
      },
      { label: "Zip Code", name: "zip", type: "number", error: "zipError" },
      {
        label: "Phone Number",
        name: "phoneNumber",
        type: "tel",
        error: "phoneNumberError",
      },
    ];
    return (
      <div className="leftContainer">
        <h2>Shipping Information</h2>
        <form className="dataForm" action="">
          {inputData.length
            ? inputData.map((item, ind) => (
                <ShipItem
                  key={ind}
                  placeholder={item.label}
                  type={item.type}
                  autoComplete="off"
                  name={item.name}
                  value={shippingInfo[item.name]}
                  onChange={this.handleInputData}
                  onBlur={this.handleBlur}
                  error={error}
                  // maxLength={maxLength}
                  // cardType={cardType}
                  // isCard={item.name === 'card'}
                  errorM={
                    error && error[item.error] && error[item.error].length > 1
                      ? error[item.error]
                      : null
                  }
                />
              ))
            : null}
        </form>
      </div>
    );
  }
}

export default ShipContainer;

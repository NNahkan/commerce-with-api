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
        delivery: "standard",
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

  checkErrorBeforeSave = () => {
    const { shippingInfo, error } = this.state;
    let errorValue = {};
    let isError = false;
    Object.keys(shippingInfo).forEach((val) => {
      if (!shippingInfo[val].length) {
        errorValue = { ...errorValue, [`${val}Error`]: "Required" };
        isError = true;
      } else if (error[`${val}Error`] != null) {
        isError = true;
      }
    });
    this.updateState("error", ...errorValue);
    console.log(error);
    return isError;
  };

  handleAddCard = (e) => {
    e.preventDefault();
    const errorCheck = this.checkErrorBeforeSave();
    if (!errorCheck) {
      this.props.updateShipping({
        shippingInfo: this.state.shippingInfo,
      });
      this.setState({ INIT_CARD });
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
        error: "countryError",
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
          <div className={s.radioWrapper}>
            <p>
              <strong>Delivery Options:</strong>
            </p>
            <label htmlFor="standard">
              <input
                checked={delivery === "standard"}
                type="radio"
                name="delivery"
                id="standard"
                value="standard"
                onChange={this.handleInputData}
              />
              Standard
            </label>
            <label htmlFor="express">
              <input
                type="radio"
                name="delivery"
                id="express"
                value="express"
                onChange={this.handleInputData}
              />
              Express
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default ShipContainer;

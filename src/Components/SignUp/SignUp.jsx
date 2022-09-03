import React, { Component } from "react";
import {
  emailValidation,
  onlyTextValidation,
  passwordMatch,
  passwordValidation,
} from "../Javascript/Validations";
import SignItem from "./SignItem/SignItem";

const NEW_USER = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPass: "",
};

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      newUser: NEW_USER,
      revealPassword: "password",
      eye: true,
      error: {},
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
    this.updateState("newUser", { [name]: value });
  };

  handleBlur = ({ target: { name, value } }) => {
    this.handleValidation(name, value);
  };

  handleValidation = (name, value) => {
    const pass = this.state.newUser.password;
    let errorText;
    const handVal = (valid) => {
      errorText = valid(value);
      this.updateState("error", { [`${name}Error`]: errorText });
    };
    switch (name) {
      case "firstName":
      case "lastName":
        handVal(onlyTextValidation);
        break;
      case "email":
        handVal(emailValidation);
        break;
      case "password":
        handVal(passwordValidation);
        break;
      case "confirmPass":
        errorText = passwordMatch(pass, value);
        this.updateState("error", { [`${name}Error`]: errorText });
        break;
      default:
        break;
    }
  };

  checkErrorBeforeSave = () => {
    const { newUser, error } = this.state;
    let errorValue = {};
    let isError = false;
    Object.keys(newUser).forEach((val) => {
      if (!newUser[val].length) {
        errorValue = { ...errorValue, [`${val}Error`]: "Required" };
        isError = true;
      } else if (error[`${val}Error`] != null) {
        this.handleValidation(val, newUser[val]);
        error[`${val}Error`] === null ? (isError = false) : (isError = true);
      }
    });
    this.updateState("error", errorValue);
    return isError;
  };

  handleAddCard = (e) => {
	const {newUser} = this.state
    e.preventDefault();
    const errorCheck = this.checkErrorBeforeSave();
    if (!errorCheck) {
      this.props.updateCurrentUser(newUser);
      this.props.updateUserList({ [newUser["firstName"]]: newUser});
      this.setState({ newUser: NEW_USER });
      this.props.updateDisplay("home");
    }
  };

  render() {
    const { newUser, error } = this.state;
    const inputData = [
      {
        label: "First Name*",
        name: "firstName",
        type: "text",
        error: "firstNameError",
      },
      {
        label: "LastName",
        name: "lastName",
        type: "text",
        error: "lastNameError",
      },
      {
        label: "Your E-Mail address*",
        name: "email",
        type: "text",
        error: "emailError",
      },
      {
        label: "Create Password*",
        name: "password",
        type: "password",
        error: "passwordError",
      },
      {
        label: "Confirm Password",
        name: "confirmPass",
        type: "password",
        error: "confirmPassError",
      },
    ];
    return (
      <div className="accountPage">
        <h2>Create Account</h2>
        <form
          onSubmit={this.handleAddCard}
          id="signUpForm"
          className='labelWrapper'
        >
          {inputData.length
            ? inputData.map((item, ind) => (
                <SignItem
                  key={ind}
                  name={item.name}
                  id={item.name}
                  type={item.type}
                  placeholder={item.label}
                  value={newUser[item.name]}
                  autoComplete="off"
                  onChange={this.handleInputData}
                  onBlur={this.handleBlur}
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
        <button className="btn btn-menu" type="submit" form="signUpForm">
          Create An Account
        </button>
      </div>
    );
  }
}

export default SignUp;

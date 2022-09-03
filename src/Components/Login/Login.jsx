import React, { Component } from "react";
import { emailValidation, passwordValidation } from "../Javascript/Validations";
import LoginItem from "./LoginItem/LoginItem";

const NEW_USER = {
  email: "",
  password: "",
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userLogin: NEW_USER,
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
    this.updateState("userLogin", { [name]: value });
  };

  handleBlur = ({ target: { name, value } }) => {
    this.handleValidation(name, value);
  };

  handleValidation = (name, value) => {
    let errorText;
    const handVal = (valid) => {
      errorText = valid(value);
      this.updateState("error", { [`${name}Error`]: errorText });
    };
    switch (name) {
      case "email":
        handVal(emailValidation);
        break;
      case "password":
        handVal(passwordValidation);
        break;
      default:
        break;
    }
  };

  deneme = () => {
    let isError = true;
    const userList = this.props.commerce.savedUsers;
    const currentAttempt = this.state.userLogin;
    const result = Object.keys(userList).find(
      (item) => userList[item].email === currentAttempt.email
    );
    if (result !== undefined) {
		const pass = userList[result].password;
      this.passwordCheck(pass) === true
        ? (isError = false)
        : this.updateState("error", {
            passwordError: "Password does not match",
          });
    } else {
      this.updateState("error", {
        emailError: "There is no account with this email",
      });
    }
    return isError;
  };

  passwordCheck = (value) => {
    const currentAttempt = this.state.userLogin;
    return currentAttempt.password === value ? true : false;
  };

  checkErrorBeforeSave = () => {
    const { userLogin, error } = this.state;
    let errorValue = {};
    let isError = false;
    Object.keys(userLogin).forEach((val) => {
      if (!userLogin[val].length) {
        errorValue = { ...errorValue, [`${val}Error`]: "Required" };
        isError = true;
      } else if (error[`${val}Error`] != null) {
        this.handleValidation(val, userLogin[val]);
        error[`${val}Error`] === null ? (isError = false) : (isError = true);
      }
    });
    this.updateState("error", errorValue);
	 if (isError === false) {
		isError = this.deneme();
	 }
    return isError;
  };

  handleSubmit = (e) => {
    const { userLogin } = this.state;
    e.preventDefault();
    const errorCheck = this.checkErrorBeforeSave();
    if (!errorCheck) {
      console.log("basarili", userLogin);
    }
  };

  render() {
    const { error, eye, userLogin } = this.state;
    const inputData = [
      {
        label: "E-Mail address*",
        name: "email",
        type: "text",
        error: "emailError",
      },
      {
        label: "Password*",
        name: "password",
        type: "password",
        error: "passwordError",
      },
    ];
    return (
      <div className="accountPage">
        <h2>Login Your Account</h2>
        <form
          id="loginForm"
          onSubmit={this.handleSubmit}
          className="labelWrapper"
        >
          {inputData.length
            ? inputData.map((item, ind) => (
                <LoginItem
                  key={ind}
                  name={item.name}
                  id={item.name}
                  type={item.type}
                  placeholder={item.label}
                  value={userLogin[item.name]}
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
        <button form="loginForm" className="btn btn-menu">
          LOGIN
        </button>
      </div>
    );
  }
}

export default Login;

import React, { Component } from "react";
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
        <form className="labelWrapper">
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
      </div>
    );
  }
}

export default Login;

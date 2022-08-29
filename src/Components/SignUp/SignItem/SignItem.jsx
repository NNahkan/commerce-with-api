import React, { Component } from "react";
import s from "./SignItem.module.css";

class SignItem extends Component {
  render() {
    const { errorM, ...props } = this.props;
    return (
      <label
        style={{ height: this.props.name === "password" && "140px" }}
        className="inputLabel"
      >
        <input className="inputRoot" {...props} />
        {errorM && <div className="error">{errorM}</div>}
        {this.props.name === "password" && (
          <span style={{top: errorM && "80px"}} className={s.passInfo}>
            Password must be 8-20 characters, including: at least one capital
            letter, at least one small letter, one number and one special
            character - ! @ # $ % ^ & * ( ) _ +
          </span>
        )}
      </label>
    );
  }
}

export default SignItem;

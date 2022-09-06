import React, { Component } from "react";
import s from "./SignItem.module.css";

class SignItem extends Component {
  eyeFlip = () => this.props.eyeFlip();

  render() {
    const { errorM,eyeFlip, ...props } = this.props;
    return (
      <label
        style={{ height: this.props.name === "password" && "140px" }}
        className="inputLabel"
      >
        <input className="inputRoot" {...props} />
        {errorM && <div className="error">{errorM}</div>}
        {this.props.name === "password" && (
          <>
            <span 
				style={{ top: errorM && "80px" }} 
				className={s.passInfo}>
              Password must be 8-20 characters, including: at least one capital
              letter, at least one small letter, one number and one special
              character - ! @ # $ % ^ & * ( ) _ +
            </span>
            <button 
				onClick={this.eyeFlip} 
				type="button" 
				className="eyeFlip">
              {this.props.type === "password" ? (
                <i className="fas fa-eye "></i>
              ) : (
                <i className="fas fa-eye-slash"></i>
              )}
            </button>
          </>
        )}
      </label>
    );
  }
}

export default SignItem;

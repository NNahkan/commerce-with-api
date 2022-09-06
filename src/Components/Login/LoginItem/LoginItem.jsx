import React, { Component } from "react";

class LoginItem extends Component {
  eyeFlip = () => this.props.eyeFlip();
  render() {
    const { error, eyeFlip, errorM, ...props } = this.props;
    return (
      <label className="inputLabel">
        <input className="inputRoot" {...props} />
        {errorM && <div className="error">{errorM}</div>}
        {this.props.name === "password" && (
          <button onClick={this.eyeFlip} type="button" className="eyeFlip">
            {this.props.type === "password" ? (
              <i className="fas fa-eye "></i>
            ) : (
              <i className="fas fa-eye-slash"></i>
            )}
          </button>
        )}
      </label>
    );
  }
}

export default LoginItem;

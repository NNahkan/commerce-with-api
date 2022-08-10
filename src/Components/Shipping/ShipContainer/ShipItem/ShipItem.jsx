import React, { Component } from "react";
import s from "./ShipItem.module.css";

class ShipItem extends Component {
  render() {
    const { error, errorM, ...props } = this.props;
    return (
      <label htmlFor="">
        <input className={s.inputRoot} {...props} />
        {errorM && <div className={s.error}>{errorM}</div>}
      </label>
    );
  }
}

export default ShipItem;

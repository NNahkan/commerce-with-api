import React, { Component } from "react";
import s from "./Confirmation.module.css";

class Confirmation extends Component {
	updateDisplay = (display) => this.props.updateDisplay(display)
  render() {
    return (
      <div className="leftContainer">
        <h1>Confirmation</h1>
        <hr />
        <div className={s.confirmationWrap}>
          <i className="far fa-check-circle"></i>
          <p className={s.infoMd}>Congratulations!</p>
          <p className={s.infoMd}>Your order is accepted</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ad
            quasi impedit alias ducimus quisquam odit eos necessitatibus? Magni
            pariatur neque ullam nulla minima, quos quibusdam temporibus
            obcaecati quae adipisci.
          </p>
          <button className="btn btn-menu">Track Order</button>
          <button onClick={()=>this.updateDisplay("home")} className="btn btn-menu">Back to Home</button>
        </div>
      </div>
    );
  }
}

export default Confirmation;

import React, { Component } from "react";
import s from "./PaymentItem.module.css";
import { CARD, CARDICON } from "../../../Javascript/cardConst";

class PaymentItem extends Component {
  render() {
    const { errorM, error, cardType, isCard, ...props } = this.props;

    return (
      <label className={s.inputLabel}>
        <input
          className={s.inputRoot}
          {...props}
          style={{
            border: errorM && "2px solid red",
          }}
        />
        {errorM && <div className={s.error}>{errorM}</div>}
        {(!error || !error.cardError) && isCard && CARD.includes(cardType) && (
          <img
            style={{
              position: "absolute",
              top: "3px",
              right: "10px",
              width: "50px",
              height: "33px",
            }}
            src={CARDICON[cardType]}
            alt="card"
          />
        )}
      </label>
    );
  }
}

export default PaymentItem;

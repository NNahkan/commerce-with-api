import React, { Component } from "react";
import CartSummary from "./CartSummary/CartSummary";
import Prices from "./Prices/Prices";
import s from "./Summary.module.css";
import { CARDICON } from "../Javascript/cardConst";

class Summary extends Component {
  priceTotal = () => {
    const cart = this.props.commerce.cart;
    let total = 0;
    const cartNames = Object.keys(cart);
    for (const item of cartNames) {
      const price = cart[item]["price"];
      const quantity = cart[item]["quantity"];
      total += price * quantity;
    }
    return parseFloat(total.toFixed(2));
  };

  priceShipping = () => {
    const delivery = this.props.commerce.shipping.delivery;
    let shipPrice = 0;
    if (delivery === "express") {
      shipPrice = 15;
    } else {
      shipPrice = this.priceTotal() >= 250 ? 0 : 10;
    }
    return parseFloat(shipPrice.toFixed(2));
  };

  nextPage = () => {
    const displayScreens = this.props.commerce.displayScreens;
    const names = Object.keys(displayScreens);
    names.forEach((elm) => {
      const ind = names.indexOf(elm);
      if (displayScreens[elm] === true) {
        this.props.updateDisplay(names[ind + 1]);
      }
    });
  };

  render() {
    const { home, login, cart, shipping, signUp, payment, confirmed } =
      this.props.commerce.displayScreens;

    const { card, cardType, cardHolder } = this.props.commerce.payment;
    const cartList = this.props.commerce.cart;
    const delivery = this.props.commerce.shipping.delivery;
    const { firstName, lastName, city, address, country, zip } =
      this.props.commerce.shipping.shippingInfo;
    const { shippingButton, paymentButton } = this.props;

    return (
      <div className={`rightContainer ${s.summaryContainer}`}>
        <h2>SUMMARY</h2>
        <hr />
        <Prices
          priceTotal={this.priceTotal}
          priceShipping={this.priceShipping}
        />
        {!cart &&
          Object.keys(cartList).map((product, ind) => {
            const item = cartList[product];
            return <CartSummary key={ind} item={item} />;
          })}
        {!cart && !shipping && (
          <div>
            <ul className={`ul-defaults-none ${s.summaryShipping}`}>
              <li>{`${firstName} ${lastName}`}</li>
              <li>
                {city} {zip}
              </li>
              <li style={{ fontSize: "13px" }}>{address}</li>
              <li> {country}</li>
            </ul>
          </div>
        )}

        {confirmed && (
          <div className={s.confirmedInfos}>
            <p>{cardHolder}</p>
            <p>**** **** **** {card.slice(-4)}</p>
            <div className={s.cardTypeWrap}>
				<img
                style={{
                  width: "50px",
                  height: "33px",
                }}
                src={CARDICON[cardType]}
                alt="card"
              />
              <span>{cardType}</span>
              
            </div>
          </div>
        )}

        {cart && (
          <button onClick={() => this.nextPage()} className="btn btn-menu">
            Next Step
          </button>
        )}
        {shipping && (
          <button
            disabled={shippingButton}
            className="btn btn-menu"
            type="submit"
            form="shippingForm"
          >
            {" "}
            Shipping
          </button>
        )}
        {payment && (
          <button
            disabled={paymentButton}
            className="btn btn-menu"
            type="submit"
            form="paymentForm"
          >
            Confirm the Order
          </button>
        )}
      </div>
    );
  }
}

export default Summary;

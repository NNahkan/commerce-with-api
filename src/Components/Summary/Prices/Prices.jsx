import React, { Component } from "react";
import s from "./Prices.module.css"

class Prices extends Component {
  render() {

	 const priceTotal = this.props.priceTotal();
	 const tax = priceTotal === 0 ? 0 : parseFloat((priceTotal * 0.055).toFixed(2));
	 const priceShipping = this.props.priceShipping();

	const priceInfo = [
		["Cart Subtotal", `$${priceTotal}`],
		["Taxes", `$${tax}`],
		["Shipping",`$${priceShipping}`],
		["Total", `$${(priceShipping + priceTotal + tax ).toFixed(2)}`],
	]
    return (
      <div className={s.pricesWrap}>
        {priceInfo.map((item,ind) => (
			<div key={ind} className={s.priceTags}>
				<span>{item[0]}</span>
				<span>{item[1]}</span>
			</div>
		  ))}
      </div>
    );
  }
}

export default Prices;

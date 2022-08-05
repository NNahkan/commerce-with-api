import React, { Component } from 'react';
import Prices from './Prices/Prices';
import s from "./Summary.module.css"

class Summary extends Component {

	priceTotal = () => {
		const cart = this.props.cart;
		let total = 0;
		const cartNames = Object.keys(cart);
		for ( const item of cartNames) {
			const price = cart[item]["price"];
			const quantity = cart[item]["quantity"];
			total += price * quantity;
		}
		return parseFloat(total.toFixed(2));
	}

	priceShipping = () => {
		let shipPrice = 0;
		if (this.priceTotal() < 250 && this.priceTotal !== 0) {
			shipPrice = 10
		}
		return parseFloat(shipPrice.toFixed(2));
	}

	render() {
		return (
			<div className={`rightContainer ${s.summaryContainer}`}>
				<h2>SUMMARY</h2>
				<hr />
				<Prices
				priceTotal = {this.priceTotal}
				priceShipping = {this.priceShipping}/>
			</div>
		);
	}
}

export default Summary;
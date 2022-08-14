import React, { Component } from 'react';
import CartSummary from './CartSummary/CartSummary';
import Prices from './Prices/Prices';
import s from "./Summary.module.css"

class Summary extends Component {

	priceTotal = () => {
		const cart = this.props.cart
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
		const delivery = this.props.delivery;
		console.log(delivery);
		let shipPrice = 0;
		if (delivery === "express" ) {
			shipPrice = 15
		} else {
			shipPrice = this.priceTotal() >= 250 
			? 0
			: 10
		}
		return parseFloat(shipPrice.toFixed(2));
	}

	nextPage = () => {
		const displayScreens = this.props.displayScreens
		const names = Object.keys(displayScreens)
		names.forEach(elm => {
			const ind = names.indexOf(elm);
			if (displayScreens[elm] === true) {
				this.props.updateDisplay( names[ind + 1]);
			}
		});
	}

	render() {
		const { home, login, cart, shipping, signUp } =
      this.props.displayScreens;


		return (
			<div className={`rightContainer ${s.summaryContainer}`}>
				<h2>SUMMARY</h2>
				<hr />
				<Prices
				priceTotal = {this.priceTotal}
				priceShipping = {this.priceShipping}/>
				{!cart && (
					Object.keys(this.props.cart).map(( product, ind) => {
						const item = this.props.cart[product];
						return (
							<CartSummary
							key={ind}
							item={item}
							/>
						)
					})
				)}
				
				
				<button onClick={()=>this.nextPage()} className='btn btn-menu'>Next Step</button>
				{shipping && (
					<button
					type='submit'
					form='shippingForm'
					> Shipping</button>
				)}
				</div>
		);
	}
}

export default Summary;
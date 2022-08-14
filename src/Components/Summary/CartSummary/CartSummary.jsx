import React, { Component } from 'react';
import s from "./CartSummary.module.css"

class CartSummary extends Component {
	render() {
		const {item} = this.props;
		return (
			<div className={s.itemSummaries}>
				<div className={s.imageWrap}>
				<img  src={item.image} alt="item" />
				</div>
				<div className={s.itemInfos}>
					<span className={s.itemName} title={item.name}>{item.name}</span>
					<div >
						<span>Quantity: {item.quantity}</span>
						<span ><strong>${item.price}</strong></span>
					</div>
				</div>
			</div>
		);
	}
}

export default CartSummary;
import React, { Component } from 'react';
import ItemCart from './ItemCart/ItemCart';
import s from './ItemContainer.module.css'

class ItemContainer extends Component {
	render() {

		const cart = this.props.cart;
		const headers = ['Products', 'Prices', 'Quantity', 'Total Price']
		return (
			<div className={`${s.itemcontainer} leftContainer`}>
				<div className={s.itemFlex}>
					{headers.map((item,ind) => (
						<h3 key={ind}>{item}</h3>
					))}
				</div>
				{Object.keys(cart).map((productName, index) => {
                const product = cart[productName];
                return (
                    <ItemCart
                        key={index}
                        product={product}
                    />
                );
            })}
				<hr />
			</div>
		);
	}
}

export default ItemContainer;
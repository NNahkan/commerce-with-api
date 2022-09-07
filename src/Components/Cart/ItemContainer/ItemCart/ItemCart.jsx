import React, { Component } from "react";
import s from "./ItemCart.module.css";

class ItemCart extends Component {

	// updateItem = this.props.updateItem;
	// e => this.updateItem(name, {quantity: e.target.value})}>
	updateItem = ({ target: {value}}) => {
		this.props.updateItem(this.props.product.name, {quantity:value})
	}
	deleteCart = () => {
		this.props.deleteCart(this.props.product.name);
	};
	// deletecart = this.props.deleteCart
	creatingSelect = (inventory) => {
		let arr = [];
		for ( let i = 1; i <= inventory; i++) {
			arr.push(
				<option key={i}  value={i} >
					{i}
					</option>
			);
		}
		return arr;
	};

	
	

  render() {
    const { product } = this.props;
    const { name, price, image, quantity } = product;
    return (
      <div className={s.itemFlex}>
        <div className={s.itemImage}>
          <img src={image} alt="" />
          <span>{name}</span>
        </div>
        <div>${(price)}</div>
        <div>
          <select 
			 name="quantity" 
			 id="quantity" 
			 value={quantity} 
			 onChange={ this.updateItem}>
			{/* onChange={ ({ target: { value } }) => this.updateItem(name, {quantity: value})}> */}
            {this.creatingSelect(9)}
          </select>
        </div>
        <div>${(price*quantity).toFixed(2)}</div>
		  <button onClick={this.deleteCart} className={`btn-ghost ${s.deleteBtn}`}>X</button>
      </div>
    );
  }
}

export default ItemCart;

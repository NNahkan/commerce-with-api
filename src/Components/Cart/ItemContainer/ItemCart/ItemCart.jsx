import React, { Component } from "react";
import s from "./ItemCart.module.css";

class ItemCart extends Component {

	updateItem= this.props.updateItem;
  render() {
    const { product } = this.props;
    const { name, price, image, quantity } = product;
    return (
      <div className={s.itemFlex}>
        <div className={s.itemImage}>
          <img src={image} alt="" />
          <span>{name}</span>
        </div>
        <div>${price}</div>
        <div>
          <select 
			 name="quantity" 
			 id="quantity" 
			 value={quantity} 
			 onChange={e => this.updateItem(name, {quantity: e.target.value })}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>${price*quantity}</div>
      </div>
    );
  }
}

export default ItemCart;

import React, { Component } from "react";
import s from "./ItemCart.module.css";

class ItemCart extends Component {
  render() {
	const product=this.props.product;
    return (
      <div className={s.itemFlex}>
        <h3>{product.name}</h3>
        <h3>b</h3>
        <h3>c</h3>
        <h3>d</h3>
      </div>
    );
  }
}

export default ItemCart;

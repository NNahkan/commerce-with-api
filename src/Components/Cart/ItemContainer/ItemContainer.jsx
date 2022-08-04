import React, { Component } from "react";
import ItemCart from "./ItemCart/ItemCart";
import s from "./ItemContainer.module.css";

class ItemContainer extends Component {
  render() {
    const { cart } = this.props;
    const headers = ["Products", "Prices", "Quantity", "Total Price"];
    return (
      <div className={`${s.itemcontainer} leftContainer`}>
        <div className={s.itemFlex}>
          {headers.map((item, ind) => (
            <h3 key={ind}>{item}</h3>
          ))}
        </div>
        <hr />

        {Object.keys(cart).map((productName, index) => {
          const product = cart[productName];
          return (
            <ItemCart
              updateItem={this.props.updateItem}
              key={index}
              product={product}
            />
          );
        })}
      </div>
    );
  }
}

export default ItemContainer;

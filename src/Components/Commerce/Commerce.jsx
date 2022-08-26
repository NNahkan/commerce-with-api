import React, { Component } from "react";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import CommerceService from "../service";
import { variables } from "../Javascript/StateVariables";
import Cart from "../Cart/Cart";
import Shipping from "../Shipping/Shipping";
import Payment from "../Payment/Payment";

const INIT_CARD = variables;

const commerce = new CommerceService();
class Commerce extends Component {
  constructor() {
    super();
    this.state = {
      commerce: INIT_CARD,
      data: [],
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
      error: false,
    });
    commerce.fetchProducts().then(
      (res) => {
        if (res && res.response.ok) {
          this.setState({
            data: res.data,
            loading: false,
          });
        } else {
          this.setState({ loading: false });
        }
      },
      (error) => {
        this.setState({
          loading: false,
          error: true,
        });
      }
    );
  }

  updateState = (name, state, func) => {
    this.setState(
      (prevState) => ({
        [name]: {
          ...prevState[name],
          ...state,
        },
      }),
      func
    );
  };

  updateSubState = (name, sub, state, func) => {
    this.setState(
      (prevState) => ({
        [name]: {
          ...prevState[name],
          [sub]: {
            ...prevState[name][sub],
            ...state,
          },
        },
      }),
      func
    );
  };

  updateItemCart = (name, sub, itemCart, state, func) => {
    this.setState(
      (prevState) => ({
        [name]: {
          ...prevState[name],
          [sub]: {
            ...prevState[name][sub],
            [itemCart]: {
              ...prevState[name][sub][itemCart],
              ...state,
            },
          },
        },
      }),
      func
    );
  };

  updateCart = (state, func) =>
    this.updateSubState("commerce", "cart", state, func);
  updateShipping = (state, func) =>
    this.updateSubState("commerce", "shipping", state, func);
  updatePayment = (state, func) =>
    this.updateSubState("commerce", "payment", state, func);
  updateItem = (name, state) =>
    this.updateItemCart("commerce", "cart", name, state);

  updateDisplay = (display) => {
    const displayCondition = Object.keys(this.state.commerce.displayScreens);
    displayCondition.forEach((elm) => {
      this.updateSubState("commerce", "displayScreens", { [elm]: false });
    });
    this.updateSubState("commerce", "displayScreens", { [display]: true });
  };

  deleteCart = (commerce, name, sub) => {
    const arr = { ...this.state };
    delete arr[commerce][name][sub];
    this.setState(arr);
  };

  render() {
    const { loading, error, data, commerce } = this.state;
    const { home, login, cart, shipping, signUp, payment } =
      this.state.commerce.displayScreens;
    return (
      <>
        <Navbar updateDisplay={this.updateDisplay} />
        <div className="container">
          {!loading ? (
            <>{home && <Home updateCart={this.updateCart} data={data} />}</>
          ) : (
            <div>Loading...</div>
          )}
          {cart && (
            <Cart
              updateDisplay={this.updateDisplay}
              displayScreens={commerce.displayScreens}
              updateItem={this.updateItem}
              commerce={commerce}
              deleteCart={this.deleteCart}
            />
          )}

          {shipping && (
            <Shipping
              updateShipping={this.updateShipping}
              updateDisplay={this.updateDisplay}
              updateItem={this.updateItem}
              updateSubState={this.updateSubState}
              commerce={commerce}
              deleteCart={this.deleteCart}
            />
          )}
          {payment && (
            <Payment
              updatePayment={this.updatePayment}
              updateDisplay={this.updateDisplay}
              commerce={commerce}
            />
          )}
        </div>
        {error && <h3> Error loading data</h3>}
      </>
    );
  }
}

export default Commerce;

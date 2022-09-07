import React, { Component } from "react";
import s from "./Navbar.module.css";

class Navbar extends Component {
  updateDisplay = (state) => this.props.updateDisplay(state);

  render() {
    const { currentUser, cart } = this.props.commerce;
    const { lastName } = currentUser;
    const amount = Object.keys(cart).length;

    return (
      <div className="background">
        <div className="container">
          <div className={s.navbar}>
            <button
              className="btn-ghost"
              onClick={() => this.updateDisplay("home")}
            >
              NNahkan
            </button>
            <div style={{ marginLeft: "auto" }}>
              <ul className={`ul-defaults-none ${s.ulNavbar}`}>
                {currentUser ? (
                  <li className={s.greeting}>
                    Welcome <strong>{lastName}</strong>
                  </li>
                ) : (
                  <>
                    <li>
                      <button
                        className="btn-ghost"
                        onClick={() => this.updateDisplay("login")}
                      >
                        Login
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-ghost"
                        onClick={() => this.updateDisplay("signUp")}
                      >
                        Create An Account
                      </button>
                    </li>
                  </>
                )}
                <li>
                  <button
                    disabled={!amount}
                    style={{ opacity: !amount && "50%" }}
                    className="btn-ghost"
                    onClick={() => this.updateDisplay("cart")}
                  >
                    Cart  
                    <i
                      style={{opacity: !amount && "0" }}
                      className={`fas fa-shopping-cart ${s.cartFont}`}
                    >
                      <span className={s.cartCount}>{amount}</span>
                    </i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

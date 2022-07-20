import React, { Component } from "react";
import s from "./Navbar.module.css";

class Navbar extends Component {
  render() {
    return (
      <div className="background">
        <div className="container">
          <div className={s.navbar}>
            <div>NNahkan</div>
            <div style={{marginLeft: "auto"}}>
              <ul className={`ul-defaults-none ${s.ulNavbar}`}>
                <li>Login</li>
                <li>Create An Account</li>
                <li>Cart</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

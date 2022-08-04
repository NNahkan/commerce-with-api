import React, { Component } from "react";
import s from "./Navbar.module.css";

class Navbar extends Component {
  
	updateDisplay = (state) => this.props.updateDisplay(state);

	render() {

	
    return (
      <div className="background">
        <div className="container">
          <div className={s.navbar}>
            <button onClick={() => this.updateDisplay("home")}>NNahkan</button>
            <div style={{marginLeft: "auto"}}>
              <ul className={`ul-defaults-none ${s.ulNavbar}`}>
                <li><button >Login</button></li>
                <li><button >Create An Account</button></li>
                <li><button onClick={() => this.updateDisplay("cart")}>Cart</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

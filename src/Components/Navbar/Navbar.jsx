import React, { Component } from "react";
import s from "./Navbar.module.css";

class Navbar extends Component {
  
	updateDisplay = (state) => {
		const displayCondition = Object.keys(this.props.displayCondition);
		displayCondition.forEach((elm) => {
			this.props.updateSubState("commerce", "displayScreens", { [elm]: false})
		});
		this.props.updateSubState("commerce", "displayScreens", {[state]: true})
	}

	render() {

	
    return (
      <div className="background">
        <div className="container">
          <div className={s.navbar}>
            <div>NNahkan</div>
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

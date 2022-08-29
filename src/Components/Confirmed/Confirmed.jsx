import React, { Component } from "react";
import Summary from "../Summary/Summary";
import Confirmation from "./Confirmation/Confirmation";

class Confirmed extends Component {
  render() {
    return (
      <div className="secondContainer" style={{ alignItems: "normal" }}>
        <Confirmation updateDisplay={this.props.updateDisplay} />
        <Summary
          commerce={this.props.commerce}
          updateDisplay={this.props.updateDisplay}
        />
      </div>
    );
  }
}

export default Confirmed;

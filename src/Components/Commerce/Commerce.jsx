import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";

class Commerce extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Searchbar />
        </div>
      </>
    );
  }
}

export default Commerce;

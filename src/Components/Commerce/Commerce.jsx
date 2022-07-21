import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";
import CommerceService from "../service";

const commerce = new CommerceService();
class Commerce extends Component {

	componentDidMount() {
		commerce.fetchProducts().then(
			(res) => {
				if (res && res.response.ok) {
					console.log(res.data);
				} else {
					console.log("else calisti");
				}
			},
			(error) => {
				console.log(error,"error calisti");
			}
		)
	}

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
//"https://api.chec.io/v1/assets/ast_B7ZQobNDa4AgNn"

export default Commerce;

import React, { Component } from "react";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  render() {
	const categories = ["All", "Laptop", "Desktop", "Monitor", "Tablet", "Pc Accessories"]
    return (
      <>
        <div className={s.searchBar}>
          <input value={this.props.search} onChange={this.props.searchUser} type="search" placeholder="Search..." />
        </div>
			<div className={s.searchCategory}>
					{categories.map((item, index) => (
							<button key={index} onClick={this.props.searchUser} value={item==="All" ? null : item}>{item}</button>
					))}
				</div>
			
		</>
    );
  }
}

export default Searchbar;

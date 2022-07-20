import React, { Component } from "react";
import s from "./Searchbar.module.css";

class Searchbar extends Component {
  render() {
    return (
      <>
        <div className={s.searchBar}>
          <input type="search" placeholder="Search..." />
        </div>
			<div className={s.searchCategory}>
				<ul className="ul-defaults-none">
					<li>Category</li>
					<li>Category</li>
					<li>Category</li>
					<li>Category</li>
					<li>Category</li>
					<li>Category</li>
				</ul>
			</div>
		</>
    );
  }
}

export default Searchbar;

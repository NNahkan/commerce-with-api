import React, { Component } from "react";
import { countryList } from "../../../Javascript/Constants";
import s from "./ShipItem.module.css";
// Blur, validation, errortext done.Next steps:Country, delivery, requried, button, state

class ShipItem extends Component {
  render() {
    const { error, errorM, ...props } = this.props;
    return (
		<>
		{props.name !== "country" ? (
			<label className={s.inputLabel} htmlFor="">
			<input className={s.inputRoot} {...props} />
			{errorM && <div className={s.error}>{errorM}</div>}
		 </label>
		) : <div className={s.countryList}>
			<select {...props}>
		{countryList.map((country, ind) => {
			return (
				<option value={country} key={ind}>{country}</option>
			)
		})}
	</select>
	{errorM && <div className={s.error}>{errorM}</div>}

		</div>
		}
		</>
      
    );
  }
}

export default ShipItem;

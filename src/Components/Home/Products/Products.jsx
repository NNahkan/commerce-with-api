import React, { Component } from 'react';
import s from "./Products.module.css"

class Products extends Component {
	constructor(){
		super();
		this.state = {
			isHover: false
		}
	}
	render() {
		const {item} = this.props
		const {isHover} = this.state
		return (
			<div 
			className={s.card}
			onMouseOver={()=> this.setState({ isHover: true})}
			onMouseLeave={()=> this.setState({ isHover: false})}
			>
				
					<div className={`${s.cardHover} ${isHover && (s.hover)}`}>
					<div>{item.description}</div>
					<button onClick={()=> console.log(item)} className='btn'>ADD</button>
					</div>
				
				<div className={s.cardBody}>
					<img src={item.image} alt="" />
				</div>
				<div className={s.cardInfo}>
					<p>{item.name}</p>
					<p>${item.price}</p>
				</div>
				
			</div>
		);
	}
}

export default Products;
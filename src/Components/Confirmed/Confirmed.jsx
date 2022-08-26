import React, { Component } from 'react';
import Summary from '../Summary/Summary';

class Confirmed extends Component {
	render() {
		return (
			<div className='secondContainer'>
				<div className='leftContainer'>
					aa
				</div>
				<Summary
				commerce={this.props.commerce}
				updateDisplay={this.props.updateDisplay}
				/>
			</div>
		);
	}
}

export default Confirmed;
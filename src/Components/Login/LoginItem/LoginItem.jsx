import React, { Component } from 'react';

class LoginItem extends Component {
	render() {
		const {error,errorM, ...props} = this.props;
		return (
			<label className='inputLabel'>
				<input className='inputRoot' {...props}/>
				{errorM && <div className='error'>{errorM}</div>}
			</label>
		);
	}
}

export default LoginItem;
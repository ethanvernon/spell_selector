import React, { Component } from 'react';
import './App.css';

export class Begin extends Component {

	render() {
		let doubleClass = "center " + this.props.hide;

		return (
			<div className={doubleClass}>
				<button onClick={this.props.handleClick}>
				Begin Adventuring
				</button>
			</div>
		)
	}
}
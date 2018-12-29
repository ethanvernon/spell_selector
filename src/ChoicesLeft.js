import React, { Component } from 'react';
import './App.css';

export class ChoicesLeft extends Component {

	render() {
		let multiClass= "choose "+this.props.hide;

		return (
			<div className={multiClass}>
				Choose <span className='blue'>{this.props.spellNumber}</span> more (click to add):
			</div>
		)
	}
}
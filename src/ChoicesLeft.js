import React, { Component } from 'react';
import './App.css';

export class ChoicesLeft extends Component {

	render() {
		return (
			<div className="choose">
				Choose <span className='blue'>{this.props.spellNumber}</span> more (click to add):
			</div>
		)
	}
}
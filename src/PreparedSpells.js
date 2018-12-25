import React, { Component } from 'react';
import './App.css';

export class PreparedSpells extends Component {

	render() {
		return (
			<div className={this.props.hide}>
				Prepared Spells:<br/>

				Level 1: {this.props.levelOneSpells.join(', ')}<br/>
				Level 2: {this.props.levelTwoSpells.join(', ')}
			</div>
		)
	}
}
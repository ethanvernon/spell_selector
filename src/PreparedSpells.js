import React, { Component } from 'react';
import './App.css';

export class PreparedSpells extends Component {

	render() {
		return (
			<div className={this.props.hide} style={{maxWidth:600}}>
				Prepared Spells:<br/>

				<p>1<sup>st</sup> Level: {this.props.levelOneSpells.join(', ')}</p>
				<p>2<sup>nd</sup> Level: {this.props.levelTwoSpells.join(', ')}</p>
			</div>
		)
	}
}
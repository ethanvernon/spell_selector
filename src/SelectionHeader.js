import React, { Component } from 'react';
import './App.css';

export class SelectionHeader extends Component {
  	constructor(props) {
	    super(props);
	    this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.handleClick();
	}


	render() {
		return (
			<div>
				<h2 style={{marginBottom:0}}>Spell Selector</h2>
				<div className={this.props.hide}>
					<h4 style={{marginTop:0}}>Level {this.props.level} Life Cleric</h4>
					<h5 style={{marginTop:0, marginBottom:0}}>{this.props.levelOne} Level 1 Spell Slots</h5>
					<h5 style={{marginTop:0}}>{this.props.levelTwo} Level 2 Spell Slots</h5>
					<h5 style={{marginTop:0}}>You may prepare {this.props.spellNumber} spells: <button onClick={this.handleClick}>Prepare now</button></h5>
				</div>
			</div>
		)
	}

}
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
					<p style={{fontSize:14, maxWidth:300}}>You are a level {this.props.level} Life Cleric. At this level, you may use {this.props.levelOne} level 1 spell slots,
					 and {this.props.levelTwo} level 2 spell slots. With your Wisdom modifier ({this.props.wisMod}), you may prepare {this.props.spellNumber} spells.</p>
					<button onClick={this.handleClick}>Prepare now</button>
				</div>
			</div>
		)
	}

}
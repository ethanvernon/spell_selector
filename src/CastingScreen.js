import React, { Component } from 'react';
import './App.css';

export class CastingScreen extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		let level = e.currentTarget.getAttribute('level');

		this.props.reduceNumber(level);
	}

	render() {
		let thisClass = "center no-select " + this.props.hide;

		return (
			<div className={thisClass}>
				<span>Click a spell slot to expend it</span>

				<div className='row spell-slot-container'>
					<div className='col-sm spell-slot' onTouchStart="" onClick={this.handleClick} level="1">
						<p style={{fontSize:14, weight:'bold', marginBottom:-3}}>1<sup>st</sup> Level</p>
						<p style={{fontSize:9, weight:'bold', marginBottom:0}}>Spell Slot</p>
						<p style={{fontSize:35, weight:'bold', lineHeight:'1em', marginBottom:0}}>{this.props.levelOne}</p>
						<p style={{fontSize:10, weight:'bold', marginBottom:'.5em'}}>remaining</p>
					</div>
					<div className='col-sm spell-slot' ontouchstart="" onClick={this.handleClick} level="2">
						<p style={{fontSize:14, weight:'bold', marginBottom:-3}}>2<sup>nd</sup> Level</p>
						<p style={{fontSize:9, weight:'bold', marginBottom:0}}>Spell Slot</p>
						<p style={{fontSize:35, weight:'bold', lineHeight:'1em', marginBottom:0}}>{this.props.levelTwo}</p>
						<p style={{fontSize:10, weight:'bold', marginBottom:'.5em'}}>remaining</p>
					</div>
				</div>
			</div>
		)
	}
}
import React, { Component } from 'react';
import './App.css';

export class SpellChoosing extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		let spell=e.target.innerText;
		this.props.onClick(spell);
	}


	render() {
		let levelOneArray=[];
		let levelTwoArray=[];

		for (var i=0; i<this.props.levelOne.length; i++) {
			levelOneArray.push(<button className="spell-buttons" key={"levelOne"+i} onClick={this.handleClick}>
				{this.props.levelOne[i]}
				</button>

			);
		}

		for (var j=0; j<this.props.levelTwo.length; j++) {
			levelTwoArray.push(<button className="spell-buttons" key={"levelTwo"+j} onClick={this.handleClick}>
				{this.props.levelTwo[j]}
				</button>

			);
		}


		return (
			<div className={this.props.hide}>
				<p>Choose {this.props.spellNumber} spells:</p>

				<b>Level 1 spells:</b><br/>
				<div style={{maxWidth:500}}>
					{levelOneArray}
				</div>

				<b>Level 2 spells:</b><br/>
				<div style={{maxWidth:500}}>
					{levelTwoArray}
				</div>
			</div>
		);
	}

}
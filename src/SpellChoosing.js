import React, { Component } from 'react';
import './App.css';

export class SpellChoosing extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		let spells=this.props.levelOne.concat(this.props.levelTwo)
		let spell=e.currentTarget.innerText;
		let sglSpell = spell.slice(0, -1);
		let dblSpell = spell.slice(0, -2);


		if (spells.includes(sglSpell)) {
			spell = sglSpell;
		} else if (spells.includes(dblSpell)) {
			spell = dblSpell;
			console.log(spell);
		} else {

		}

		this.props.onClick(spell);
	}


	render() {
		let levelOneArray=[];
		let levelTwoArray=[];

		let bonusAction=['Healing Word', 'Sanctuary', 'Shield of Faith', 'Spiritual Weapon'];
		let conSpell=['Bane', 'Bless', 'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Protection from Evil and Good', 'Shield of Faith', 'Calm Emotions', 
		'Enhance Ability', 'Hold Person', 'Locate Object', 'Silence'];

		for (var i=0; i<this.props.levelOne.length; i++) {
			levelOneArray.push(<button className="spell-buttons" key={"levelOne"+i} onClick={this.handleClick}>
				{this.props.levelOne[i]}{bonusAction.includes(this.props.levelOne[i])?<sup>B</sup>:null}{conSpell.includes(this.props.levelOne[i])?<sup>C</sup>:null}
				</button>

			);
		}

		for (var j=0; j<this.props.levelTwo.length; j++) {
			levelTwoArray.push(<button className="spell-buttons" key={"levelTwo"+j} onClick={this.handleClick}>
				{this.props.levelTwo[j]}{bonusAction.includes(this.props.levelTwo[j])?<sup>B</sup>:null}{conSpell.includes(this.props.levelTwo[j])?<sup>C</sup>:null}
				</button>

			);
		}


		return (
			<div className={this.props.hide}>
				<p>Choose {this.props.spellNumber} spells (click to add):</p>

				<b>1<sup>st</sup> level spells:</b><br/>
				<div style={{maxWidth:800}}>
					{levelOneArray}
				</div>

				{this.props.level > 2 &&
				<span><b>2<sup>nd</sup> level spells:</b><br/>
				<div style={{maxWidth:800}}>
					{levelTwoArray}
				</div></span>}
			</div>
		);
	}

}
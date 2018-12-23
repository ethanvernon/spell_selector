import React, { Component } from 'react';
import './App.css';

export class SpellChoosing extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		let spells=this.props.levelOne.concat(this.props.levelTwo)
		let spell=e.target.innerText;
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

		let oneBonus=['Healing Word', 'Sanctuary', 'Shield of Faith'];
		let oneCon=['Bane', 'Bless', 'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Protection from Evil and Good', 'Shield of Faith'];
		let twoBonus=['Spiritual Weapon'];
		let twoCon=['Calm Emotions', 'Enhance Ability', 'Hold Person', 'Locate Object', 'Silence'];

		for (var i=0; i<this.props.levelOne.length; i++) {
			levelOneArray.push(<button className="spell-buttons" key={"levelOne"+i} onClick={this.handleClick}>
				{this.props.levelOne[i]}{oneBonus.includes(this.props.levelOne[i])?<sup>B</sup>:null}{oneCon.includes(this.props.levelOne[i])?<sup>C</sup>:null}
				</button>

			);
		}

		for (var j=0; j<this.props.levelTwo.length; j++) {
			levelTwoArray.push(<button className="spell-buttons" key={"levelTwo"+j} onClick={this.handleClick}>
				{this.props.levelTwo[j]}{twoBonus.includes(this.props.levelTwo[j])?<sup>B</sup>:null}{twoCon.includes(this.props.levelTwo[j])?<sup>C</sup>:null}
				</button>

			);
		}


		return (
			<div className={this.props.hide}>
				<p>Choose {this.props.spellNumber} spells:</p>

				<b>1<sup>st</sup> level spells:</b><br/>
				<div style={{maxWidth:500}}>
					{levelOneArray}
				</div>

				<b>2<sup>nd</sup> level spells:</b><br/>
				<div style={{maxWidth:500}}>
					{levelTwoArray}
				</div>
			</div>
		);
	}

}
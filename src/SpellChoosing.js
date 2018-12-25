import React, { Component } from 'react';
import './App.css';

export class SpellChoosing extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		//this.convertToBaseName = this.convertToBaseName.bind(this);
	}

	//function is called whenever a spell button is clicked on
	//converts spell to its base name if necessary and passes it to Parent.js' updateSpellChoiceNumber function
	handleClick(e) {

		if (this.props.spellNumber === 0) {
			return null;
		}

		//combine all spells excluding domain spells into one array
		let spells=this.props.levelOne.concat(this.props.levelTwo)
		let spell=e.currentTarget.innerText;

		//passes base spell name to Parent.js' updateSpellChoiceNumber function
		if (spells.includes(spell)) {			
			this.props.onClick(spell);
		} else{
			spell=this.props.cleanString(spell);
			//passes base spell name to Parent.js' updateSpellChoiceNumber function
			this.props.onClick(spell);
		}
	}

	


	render() {
		let levelOneArray=[];
		let levelTwoArray=[];

		let bonusAction=['Healing Word', 'Sanctuary', 'Shield of Faith', 'Spiritual Weapon'];
		let conSpell=['Bane', 'Bless', 'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Protection from Evil and Good', 'Shield of Faith', 'Calm Emotions', 
		'Enhance Ability', 'Hold Person', 'Locate Object', 'Silence'];

		//takes each first level spell and makes it into a button, plus adds a bonus action or concentration spell marker
		for (var i=0; i<this.props.levelOne.length; i++) {
			levelOneArray.push(<button className="spell-buttons" key={"levelOne"+i} onClick={this.handleClick}>
				{this.props.levelOne[i]}{bonusAction.includes(this.props.levelOne[i])?<sup>B</sup>:null}{conSpell.includes(this.props.levelOne[i])?<sup>C</sup>:null}
				</button>

			);
		}

		//takes each second level spell and makes it into a button, plus adds a bonus action or concentration spell marker
		for (var j=0; j<this.props.levelTwo.length; j++) {
			levelTwoArray.push(<button className="spell-buttons" key={"levelTwo"+j} onClick={this.handleClick}>
				{this.props.levelTwo[j]}{bonusAction.includes(this.props.levelTwo[j])?<sup>B</sup>:null}{conSpell.includes(this.props.levelTwo[j])?<sup>C</sup>:null}
				</button>

			);
		}


		return (

			//this won't show until "prepare now" button is clicked in SelectionHeader.js
			<div className={this.props.hide}>
				{/*Number of spells gets updated each time a spell is clicked*/}
				<p>Choose {this.props.spellNumber} spells (click to add):</p>

				{/*shows all first level spells minus domain spells*/}
				<b>1<sup>st</sup> level spells:</b><br/>
				<div style={{maxWidth:800}}>
					{levelOneArray}
				</div>

			{/*shows all second level spells minus domain spells but only if character level is high enough*/}
				{this.props.level > 2 &&
				<span><b>2<sup>nd</sup> level spells:</b><br/>
				<div style={{maxWidth:800}}>
					{levelTwoArray}
				</div></span>}
			</div>
		);
	}

}
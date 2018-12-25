import React, { Component } from 'react';
import './App.css';

export class Chosen extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {

		//get spell name with add-ons, remove add-ons
		let spell=this.props.cleanString(e.currentTarget.innerText);

		//all domain spells in one array
		let domainSpells=this.props.domainSpellsFirst.concat(this.props.domainSpellsSecond);
		console.log(domainSpells);
		console.log(spell);

		if (!domainSpells.includes(spell)) {
			console.log("this is not a domain spell");
			this.props.removeChosen(spell);
		}
	}

	render() {

		let levelOneArray=[];
		let levelTwoArray=[];

		let bonusAction=['Healing Word', 'Sanctuary', 'Shield of Faith', 'Spiritual Weapon'];
		let conSpell=['Bane', 'Bless', 'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Protection from Evil and Good', 'Shield of Faith', 'Calm Emotions', 
		'Enhance Ability', 'Hold Person', 'Locate Object', 'Silence'];
		let domainSpell=this.props.domainSpellsFirst.concat(this.props.domainSpellsSecond);

		//makes a button out of each level 1 spell just like in SpellChoosing.js
		//adds a D for domain spells
		if (this.props.chosenOne.length) {
			for (var i=0; i<this.props.chosenOne.length; i++) {
				levelOneArray.push(<button className="spell-buttons" key={"levelOneChose"+i} onClick={this.handleClick}>
					{this.props.chosenOne[i]}
					{bonusAction.includes(this.props.chosenOne[i])?<sup>B</sup>:null}
					{conSpell.includes(this.props.chosenOne[i])?<sup>C</sup>:null}
					{domainSpell.includes(this.props.chosenOne[i])?<sup>D</sup>:null}
					</button>

				);
			}
		}

		//makes a button out of each level 2 spell just like in SpellChoosing.js
		//adds a D for domain spells
		if (this.props.chosenTwo.length) {
			for (i=0; i<this.props.chosenTwo.length; i++) {
				levelTwoArray.push(<button className="spell-buttons" key={"levelTwoChose"+i} onClick={this.handleClick}>
					{this.props.chosenTwo[i]}
					{bonusAction.includes(this.props.chosenTwo[i])?<sup>B</sup>:null}
					{conSpell.includes(this.props.chosenTwo[i])?<sup>C</sup>:null}
					{domainSpell.includes(this.props.chosenTwo[i])?<sup>D</sup>:null}
					</button>

				);
			}
		}

		return (

			//only shows when "Prepare Now" has been clicked in SelectionHeader.js
			<div className={this.props.hide} style={{border:"1px solid white", minHeight:"8em"}}>
				<p>Chosen (click to remove):</p>
				{/*conditionally renders */}
				{this.props.chosenOne.length > 0 && 				
					<div>
						First level: {levelOneArray}
					</div>
				}
				{/*conditionally renders */}
				{this.props.chosenTwo.length > 0 && 				
					<div>
						Second level: {levelTwoArray}
					</div>
				}
			</div>
		);
	}
}
import React, { Component } from 'react';
import './App.css';

export class Chosen extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {

		//get spell name with add-ons, remove add-ons
		let spell=e.currentTarget.value;

		//all domain spells in one array
		let domainSpells=this.props.domainSpellsFirst.concat(this.props.domainSpellsSecond);
		console.log(domainSpells);
		console.log(spell);

		if (!domainSpells.includes(spell)) {
			console.log("this is not a domain spell");
			this.props.removeChosen(spell);
		}

		this.clearSelected();	
	}

	clearSelected(){
    	let elements = document.querySelectorAll("option")
    	//document.getElementById("level1options").options;

    	for(var m = 0; m < elements.length; m++){
      		elements[m].selected = false;
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
		
		for (var i=0; i<this.props.chosenOne.length; i++) {

			levelOneArray.push(
				<option key={"levelOneChose"+i} onClick={this.handleClick} value={this.props.chosenOne[i]}>
				{this.props.chosenOne[i]}
				{bonusAction.includes(this.props.chosenOne[i])||conSpell.includes(this.props.chosenOne[i])||domainSpell.includes(this.props.chosenOne[i])?' (':null}
				{domainSpell.includes(this.props.chosenOne[i])?'B':null}
				{bonusAction.includes(this.props.chosenOne[i])?'B':null}
				{conSpell.includes(this.props.chosenOne[i])?'C':null}
				{bonusAction.includes(this.props.chosenOne[i])||conSpell.includes(this.props.chosenOne[i])||domainSpell.includes(this.props.chosenOne[i])?')':null}
				</option>
			);
		}
		

		//makes a button out of each level 2 spell just like in SpellChoosing.js
		//adds a D for domain spells
		if (this.props.chosenTwo.length>0) {
			for (i=0; i<this.props.chosenTwo.length; i++) {
				if (i==0) {
					levelTwoArray.push()
				}
				levelTwoArray.push(<option key={"levelTwoChose"+i} onClick={this.handleClick} value={this.props.chosenTwo[i]}>
					{this.props.chosenTwo[i]}
					{bonusAction.includes(this.props.chosenTwo[i])||conSpell.includes(this.props.chosenTwo[i])||domainSpell.includes(this.props.chosenTwo[i])?' (':null}
					{domainSpell.includes(this.props.chosenTwo[i])?'D':null}
					{bonusAction.includes(this.props.chosenTwo[i])?'B':null}
					{conSpell.includes(this.props.chosenTwo[i])?'C':null}
					{bonusAction.includes(this.props.chosenTwo[i])||conSpell.includes(this.props.chosenTwo[i])||domainSpell.includes(this.props.chosenTwo[i])?')':null}
					</option>

				);
			}
		}
		

		return (

			//only shows when "Prepare Now" has been clicked in SelectionHeader.js
			<div className={this.props.hide} style={{border:"1px solid white", minHeight:"8em"}}>
				
					<b><span className="choose">Chosen spells:</span></b><br/>
					<select multiple style={{width:300, height:100}}>
						<optgroup label="Level One">
						{levelOneArray}
						</optgroup>
						{this.props.chosenTwo.length > 0 && 				
							<optgroup label="Level Two">
								
									{levelTwoArray}
								
							</optgroup>
						}
					</select>
				
			</div>
		);
	}
}
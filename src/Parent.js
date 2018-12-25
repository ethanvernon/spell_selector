import React, { Component } from 'react';
import './App.css';
import {LevelChooser} from './LevelChooser';
import {WisModChooser} from './WisModChooser';
import {SelectionHeader} from './SelectionHeader';
import {SpellChoosing} from './SpellChoosing';
import 'bootstrap/dist/css/bootstrap.css';
import {Chosen} from './Chosen';

export class Parent extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	cantrips: 		['Guidance', 'Light', 'Mending', 'Resistance', 'Sacred Flame', 'Spare the Dying', 'Thaumaturgy'],	    	
	     	firstLevel: 	['Bane', 'Command', 'Create or Destroy Water', 'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Guiding Bolt', 'Healing Word', 
	      					'Inflict Wounds', 'Protection from Evil and Good', 'Purify Food and Drink', 'Sanctuary', 'Shield of Faith'],
	      	secondLevel: 	['Aid', 'Augury', 'Blindness/Deafness', 'Calm Emotions', 'Continual Flame', 'Enhance Ability', 'Find Traps', 'Gentle Repose', 'Hold Person', 'Lesser Restoration', 
	      					'Locate Object', 'Prayer of Healing', 'Protection from Poison', 'Silence', 'Spiritual Weapon', 'Warding Bond', 'Zone of Truth'],
	      	firstLevelChoice: 	['Bane', 'Command', 'Create or Destroy Water', 'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Guiding Bolt', 'Healing Word', 
	      						'Inflict Wounds', 'Protection from Evil and Good', 'Purify Food and Drink', 'Sanctuary', 'Shield of Faith'],
	      	secondLevelChoice: 	['Aid', 'Augury', 'Blindness/Deafness', 'Calm Emotions', 'Continual Flame', 'Enhance Ability', 'Find Traps', 'Gentle Repose', 'Hold Person', 
	      						'Locate Object', 'Prayer of Healing', 'Protection from Poison', 'Silence', 'Warding Bond', 'Zone of Truth'],
	      	clericLevel: 3,
	      	cantripsKnown: 3,
	      	levelOneSlots: 4,
	      	levelTwoAvail: true,
	      	levelTwoSlots: 2,
	      	wisdomMod: 3,
	      	spellNumber: 6,
	      	spellChoiceNumber: 6,
	      	startScreenHide: "",
	      	chooseScreenHide: "hidden",
	      	domainSpellsFirst: ["Bless", "Cure Wounds"],
	      	domainSpellsSecond: ["Lesser Restoration", "Spiritual Weapon"],
	      	choseFirst: ["Bless", "Cure Wounds"],
	      	choseSecond: ["Lesser Restoration", "Spiritual Weapon"]
	    };

	    this.changeClericLevel = this.changeClericLevel.bind(this);
	    this.changeSpellSlots = this.changeSpellSlots.bind(this);
	    this.changeWisMod = this.changeWisMod.bind(this);
	    this.changeSpellNumber = this.changeSpellNumber.bind(this);
	    this.hideForChoosing = this.hideForChoosing.bind(this);
	    this.updateSpellChoiceNumber = this.updateSpellChoiceNumber.bind(this);
	    this.convertToBaseName = this.convertToBaseName.bind(this);
	    this.removeChosen = this.removeChosen.bind(this);
	}

	//called by LevelChooser.js whenever cleric level input is changed
	//sets state, and calls functions to update spell slots and number of prepared spells
	changeClericLevel(newLevel) {
		this.setState({
			clericLevel: newLevel
		})

		this.changeSpellSlots(newLevel);
		this.changeSpellNumber(this.state.wisdomMod, newLevel);
	}

	//called by changeClericLevel function
	//updates number of spell slots available based on level
	changeSpellSlots(level) {

		let levelOne = level+1 > 4 ? 4 : level+1;
		let levelTwo =[];
		let cantrips;
		
		if (level < 3) {
			levelTwo[0] = 0;
			levelTwo[1] = false;
		} else if (level == 3) {
			levelTwo[0] = 2;
			levelTwo[1] = true;
		} else if (level > 3) {
			levelTwo[0] = 3;
			levelTwo[1] = true;
		}

		if (level < 4) {
			cantrips = 3;
		} else if (level < 10) {
			cantrips = 4;
		} else {
			cantrips = 5;
		}

		this.setState({
			levelOneSlots: levelOne,
			levelTwoSlots: levelTwo[0],
			levelTwoAvail: levelTwo[1],
			cantripsKnown: cantrips
		})
	}

	//called by WisModChooser.js whenever wisdom mod input is changed
	//calls function changeSpellNumber to update number of prepared spells
	changeWisMod (newMod) {
		this.setState({
			wisdomMod: newMod
		})

		this.changeSpellNumber(newMod, this.state.clericLevel);
	}

	//called by changeWisMod and changeClericLevel
	//updates number of prepared spells available
	changeSpellNumber(mod, level) {
		let total;

		(mod + level < 1) ? total=1 : total=level+mod;

		this.setState({
			spellNumber: total,
			spellChoiceNumber: total
		})
	}

	//called by SelectionHeader.js whenever "Prepare Now" button is clicked
	//updates states which apply/remove hidden class from components
	hideForChoosing() {
		this.setState({
			startScreenHide: "hidden",
			chooseScreenHide: ""
		})
	}

	//called by SpellChoosing.js whenever a spell is clicked
	//takes the base spell name, removes it from firstLevelChoice or secondLevelChoice, adds it to either choseFirst or choseSecond
	//and updates spellChoiceNumber to reflect remaining number of prepared spell choices
	updateSpellChoiceNumber(spell) {
		let remaining = parseInt(this.state.spellChoiceNumber) - 1;
		let arr = [];
		let match;
		let chosenArrOne = this.state.choseFirst;
		let chosenArrTwo = this.state.choseSecond;

		console.log(spell);
		console.log(this.state.firstLevelChoice);
		//checks if it is a level 1 spell or a level 2 spell
		if (this.state.firstLevelChoice.includes(spell)) {
			arr = this.state.firstLevelChoice;
			chosenArrOne.push(spell);
			match=1;
		} else if (this.state.secondLevelChoice.includes(spell)) {
			arr = this.state.secondLevelChoice;
			chosenArrTwo.push(spell);
			match=2;
		} else {
			console.log("error: spell doesn't match")
		}

		//removes the chosen spell from the choices
		arr.splice(arr.indexOf(spell), 1);

		//updates states to reflect remaining number of choices, choice arrays, and chosen spell arrays
		if (match===1) {
			this.setState({
				spellChoiceNumber: remaining,
				firstLevelChoice: arr,
				choseFirst: chosenArrOne
			});
		} else {
			this.setState({
				spellChoiceNumber: remaining,
				secondLevelChoice: arr,
				choseSecond: chosenArrTwo
			});
		}
	}

	//removes spell markers
	convertToBaseName(spell) {
		//remove any potential bonus action, concentration spell, or both markers
		let sglSpell = spell.slice(0, -1);
		let dblSpell = spell.slice(0, -2);

		let spells = this.state.firstLevel.concat(this.state.secondLevel).concat(this.state.domainSpellsFirst).concat(this.state.domainSpellsSecond);

		//if its marked as bonus action, concentration spell, or both, updates spell to base name
		if (spells.includes(sglSpell)) {
			spell = sglSpell;
		} else if (spells.includes(dblSpell)) {
			spell = dblSpell;
		}

		return spell;
	}

	//removes spell from chosefirst/chosesecond, adds back to appropriate levelchoice
	removeChosen(spell) {
		let index1 = this.state.choseFirst.indexOf(spell);    // <-- Not supported in <IE9
		let array1 = this.state.choseFirst;
		let index2 = this.state.choseSecond.indexOf(spell);
		let array2 = this.state.choseSecond;
		let removed = [];
		let choiceNumber = this.state.spellChoiceNumber;

		console.log(index1);
		console.log(index2);

		if (index1 !== -1) {
		    removed = array1.splice(index1, 1);
		    let choices = this.state.firstLevelChoice;
		    choices.push(removed[0]);
		    choices.sort();
		    choiceNumber++;

		    this.setState({
		    	choseFirst: array1,
		    	firstLevelChoice: choices,
		    	spellChoiceNumber: choiceNumber
		    });
		}

		if (index2 !== -1) {
			removed = array2.splice(index2, 1);
		    let choices = this.state.secondLevelChoice;
		    choices.push(removed[0]);
		    choices.sort();
		    choiceNumber++;

			this.setState({
				choseSecond: array2,
		    	secondLevelChoice: choices,
		    	spellChoiceNumber: choiceNumber
			});
		}
	}


	render() {
		return (
			<div>

				<h2 className='my-title'>Spell Selector</h2>

				<div className='row'>

				<div className='col-sm' style={{marginBottom:25}}>
				<LevelChooser
					onChange = {this.changeClericLevel}
					level={this.state.clericLevel}
					hide = {this.state.startScreenHide}/>

				<WisModChooser
					onChange = {this.changeWisMod}
					wisMod={this.state.wisdomMod}
					hide = {this.state.startScreenHide}/>
				</div>

				<div className='col-sm'>
				<SelectionHeader
					level={this.state.clericLevel}
					levelOne={this.state.levelOneSlots}
					levelTwo={this.state.levelTwoSlots}
					spellNumber={this.state.spellNumber}
					handleClick = {this.hideForChoosing}
					hide = {this.state.startScreenHide}
					wisMod = {this.state.wisdomMod}
					levelTwoAvail = {this.state.levelTwoAvail}
					cantripsKnown = {this.state.cantripsKnown}/>
				</div>
				</div>

				<Chosen 
					hide = {this.state.chooseScreenHide}
					chosenOne = {this.state.choseFirst}
					chosenTwo = {this.state.choseSecond}
					domainSpellsFirst={this.state.domainSpellsFirst}
					domainSpellsSecond={this.state.domainSpellsSecond}
					cleanString={this.convertToBaseName}
					removeChosen={this.removeChosen}/>

				<SpellChoosing
					hide = {this.state.chooseScreenHide}
					cantrips = {this.state.myCantrips}
					levelOne = {this.state.firstLevelChoice}
					levelTwo = {this.state.secondLevelChoice}
					spellNumber = {this.state.spellChoiceNumber}
					onClick = {this.updateSpellChoiceNumber}
					level={this.state.clericLevel}
					cleanString={this.convertToBaseName}/>

			</div>
			)
	}
}
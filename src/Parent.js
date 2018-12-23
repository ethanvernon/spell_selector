import React, { Component } from 'react';
import './App.css';
import {LevelChooser} from './LevelChooser';
import {WisModChooser} from './WisModChooser';
import {SelectionHeader} from './SelectionHeader';
import {SpellChoosing} from './SpellChoosing';
import 'bootstrap/dist/css/bootstrap.css';

export class Parent extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	cantrips: 		['Guidance', 'Light', 'Mending', 'Resistance', 'Sacred Flame', 'Spare the Dying', 'Thaumaturgy'],	    	
	     	firstLevel: 	['Bane', 'Bless', 'Command', 'Create or Destroy Water', 'Cure Wounds', 'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Guiding Bolt', 'Healing Word', 
	      					'Inflict Wounds', 'Protection from Evil and Good', 'Purify Food and Drink', 'Sanctuary', 'Shield of Faith'],
	      	secondLevel: 	['Aid', 'Augury', 'Blindness/Deafness', 'Calm Emotions', 'Continual Flame', 'Enhance Ability', 'Find Traps', 'Gentle Repose', 'Hold Person', 'Lesser Restoration', 
	      					'Locate Object', 'Prayer of Healing', 'Protection from Poison', 'Silence', 'Spiritual Weapon', 'Warding Bond', 'Zone of Truth'],
	      	firstLevelChoice: 	['Bane', 'Bless', 'Command', 'Create or Destroy Water', 'Cure Wounds', 'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Guiding Bolt', 'Healing Word', 
	      						'Inflict Wounds', 'Protection from Evil and Good', 'Purify Food and Drink', 'Sanctuary', 'Shield of Faith'],
	      	secondLevelChoice: 	['Aid', 'Augury', 'Blindness/Deafness', 'Calm Emotions', 'Continual Flame', 'Enhance Ability', 'Find Traps', 'Gentle Repose', 'Hold Person', 'Lesser Restoration', 
	      						'Locate Object', 'Prayer of Healing', 'Protection from Poison', 'Silence', 'Spiritual Weapon', 'Warding Bond', 'Zone of Truth'],
	      	clericLevel: 3,
	      	cantripsKnown: 3,
	      	levelOneSlots: 4,
	      	levelTwoAvail: true,
	      	levelTwoSlots: 2,
	      	wisdomMod: 3,
	      	spellNumber: 6,
	      	spellChoiceNumber: 6,
	      	startScreenHide: "",
	      	chooseScreenHide: "hidden"
	    };

	    this.changeClericLevel = this.changeClericLevel.bind(this);
	    this.changeSpellSlots = this.changeSpellSlots.bind(this);
	    this.changeWisMod = this.changeWisMod.bind(this);
	    this.changeSpellNumber = this.changeSpellNumber.bind(this);
	    this.hideForChoosing = this.hideForChoosing.bind(this);
	    this.updateSpellChoiceNumber = this.updateSpellChoiceNumber.bind(this);
	}

	changeClericLevel(newLevel) {
		this.setState({
			clericLevel: newLevel
		})

		this.changeSpellSlots(newLevel);
		this.changeSpellNumber(this.state.wisdomMod, newLevel);
	}

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

	changeWisMod (newMod) {
		this.setState({
			wisdomMod: newMod
		})

		this.changeSpellNumber(newMod, this.state.clericLevel);
	}

	changeSpellNumber(mod, level) {
		let total;

		(mod + level < 1) ? total=1 : total=level+mod;

		this.setState({
			spellNumber: total,
			spellChoiceNumber: total
		})
	}

	hideForChoosing() {
		this.setState({
			startScreenHide: "hidden",
			chooseScreenHide: ""
		})
	}

	updateSpellChoiceNumber(spell) {
		let remaining = parseInt(this.state.spellChoiceNumber) - 1;
		let arr = [];
		let match;

		if (this.state.firstLevelChoice.includes(spell)) {
			arr = this.state.firstLevelChoice;
			match=1;
		} else {
			arr = this.state.secondLevelChoice;
			match=2;
		}

		console.log(arr);

		arr.splice(arr.indexOf(spell), 1);

		this.setState({
			spellChoiceNumber: remaining
		})

		match===1 ? this.setState({firstLevelChoice: arr}) : this.setState({secondLevelChoice: arr})
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

				<SpellChoosing
					hide = {this.state.chooseScreenHide}
					cantrips = {this.state.myCantrips}
					levelOne = {this.state.firstLevelChoice}
					levelTwo = {this.state.secondLevelChoice}
					spellNumber = {this.state.spellChoiceNumber}
					onClick = {this.updateSpellChoiceNumber}/>

			</div>
			)
	}
}
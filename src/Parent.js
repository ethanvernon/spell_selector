import React, { Component } from 'react';
import './App.css';
import {LevelChooser} from './LevelChooser';
import {WisModChooser} from './WisModChooser';
import {SelectionHeader} from './SelectionHeader';

export class Parent extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	cantrips: 		['Guidance', 'Light', 'Mending', 'Resistance', 'Sacred Flame', 'Spare the Dying', 'Thaumaturgy'],	    	
	     	firstLevel: 	['Bane', 'Bless', 'Command', 'Create or Destroy Water', 'Cure Wounds', 'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Guiding Bolt', 'Healing Word', 
	      					'Inflict Wounds', 'Protection from Evil and Good', 'Purify Food and Drink', 'Sanctuary', 'Shield of Faith'],
	      	secondLevel: 	['Aid', 'Augury', 'Blindness/Deafness', 'Calm Emotions', 'Continual Flame', 'Enhance Ability', 'Find Traps', 'Gentle Repose', 'Hold Person', 'Lesser Restoration', 
	      					'Locate Object', 'Prayer of Healing', 'Protection from Poison', 'Silence', 'Spiritual Weapon', 'Warding Bond', 'Zone of Truth'],
	      	clericLevel: 3,
	      	levelOneSlots: 4,
	      	levelTwoSlots: 2,
	      	wisdomMod: 3,
	      	spellNumber: 6,
	      	hide: ""
	    };

	    this.changeClericLevel = this.changeClericLevel.bind(this);
	    this.changeSpellSlots = this.changeSpellSlots.bind(this);
	    this.changeWisMod = this.changeWisMod.bind(this);
	    this.changeSpellNumber = this.changeSpellNumber.bind(this);
	    this.hideForChoosing = this.hideForChoosing.bind(this);
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
		let levelTwo;
		
		if (level < 3) {
			levelTwo = 0;
		} else if (level == 3) {
			levelTwo = 2;
		} else if (level > 3) {
			levelTwo = 3;
		}

		this.setState({
			levelOneSlots: levelOne,
			levelTwoSlots: levelTwo
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
			spellNumber: total
		})
	}

	hideForChoosing() {
		this.setState({
			hide: "hidden"
		})
	}


	render() {
		return (
			<div>
				<SelectionHeader
					level={this.state.clericLevel}
					levelOne={this.state.levelOneSlots}
					levelTwo={this.state.levelTwoSlots}
					spellNumber={this.state.spellNumber}
					handleClick = {this.hideForChoosing}
					hide = {this.state.hide}
					wisMod = {this.state.wisdomMod}/>

				<LevelChooser
					className={this.state.hide}
					onChange = {this.changeClericLevel}
					level={this.state.clericLevel}
					hide = {this.state.hide}/>

				<WisModChooser
				 	className={this.state.hide}
					onChange = {this.changeWisMod}
					wisMod={this.state.wisdomMod}
					hide = {this.state.hide}/>

			</div>
			)
	}
}
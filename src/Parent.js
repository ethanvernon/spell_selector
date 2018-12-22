import React, { Component } from 'react';
import './App.css';
import {LevelChooser} from './LevelChooser';

export class Parent extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	cantrips: 		['Guidance', 'Light', 'Mending', 'Resistance', 'Sacred Flame', 'Spare the Dying', 'Thaumaturgy'],	    	
	     	firstLevel: 	['Bane', 'Bless', 'Command', 'Create or Destroy Water', 'Cure Wounds', 'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Guiding Bolt', 'Healing Word', 
	      					'Inflict Wounds', 'Protection from Evil and Good', 'Purify Food and Drink', 'Sanctuary', 'Shield of Faith'],
	      	secondLevel: 	['Aid', 'Augury', 'Blindness/Deafness', 'Calm Emotions', 'Continual Flame', 'Enhance Ability', 'Find Traps', 'Gentle Repose', 'Hold Person', 'Lesser Restoration', 
	      					'Locate Object', 'Prayer of Healing', 'Protection from Poison', 'Silence', 'Spiritual Weapon', 'Warding Bond', 'Zone of Truth'],
	      	clericLevel: 1,
	      	levelOneSlots: 2,
	      	levelTwoSlots: 0
	    };

	    this.changeClericLevel = this.changeClericLevel.bind(this);
	    this.changeSpellSlots = this.changeSpellSlots.bind(this);
	}

	changeClericLevel(newLevel) {
		this.setState({
			clericLevel: newLevel
		})

		this.changeSpellSlots(newLevel);
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


	render() {
		return (
			<div>
				<h2 style={{marginBottom:0}}>Spell Selector</h2>
				<h4 style={{marginTop:0}}>Level {this.state.clericLevel} Cleric</h4>
				<h5 style={{marginTop:0, marginBottom:0}}>{this.state.levelOneSlots} Level 1 Spell Slots</h5>
				<h5 style={{marginTop:0}}>{this.state.levelTwoSlots} Level 2 Spell Slots</h5>

				<LevelChooser
					onChange = {this.changeClericLevel}
					level={this.state.clericLevel}/>
			</div>
			)
	}
}
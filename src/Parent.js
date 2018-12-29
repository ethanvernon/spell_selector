import React, { Component } from 'react';
import {LevelChooser} from './LevelChooser';
import {WisModChooser} from './WisModChooser';
import {PrepareButton} from './PrepareButton';
import {SpellChoosing} from './SpellChoosing';
import 'bootstrap/dist/css/bootstrap.css';
import {Chosen} from './Chosen';
import {Begin} from './Begin';
import {CastingScreen} from './CastingScreen';
import {PreparedSpells} from './PreparedSpells';
import {ChoicesLeft} from './ChoicesLeft';

export class Parent extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	cantrips: 			['Guidance', 'Light', 'Mending', 'Resistance', 'Sacred Flame', 'Spare the Dying', 'Thaumaturgy'],	    	
	     	firstLevel: 		['Bane', 'Command', 'Create or Destroy Water', 'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Guiding Bolt', 'Healing Word', 
	      						'Inflict Wounds', 'Protection from Evil and Good', 'Purify Food and Drink', 'Sanctuary', 'Shield of Faith'],
	      	secondLevel: 		['Aid', 'Augury', 'Blindness/Deafness', 'Calm Emotions', 'Continual Flame', 'Enhance Ability', 'Find Traps', 'Gentle Repose', 'Hold Person', 'Lesser Restoration', 
	      						'Locate Object', 'Prayer of Healing', 'Protection from Poison', 'Silence', 'Spiritual Weapon', 'Warding Bond', 'Zone of Truth'],
	      	firstLevelChoice: 	['Bane', 'Command', 'Create or Destroy Water', 'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Guiding Bolt', 'Healing Word', 
	      						'Inflict Wounds', 'Protection from Evil and Good', 'Purify Food and Drink', 'Sanctuary', 'Shield of Faith'],
	      	secondLevelChoice: 	['Aid', 'Augury', 'Blindness/Deafness', 'Calm Emotions', 'Continual Flame', 'Enhance Ability', 'Find Traps', 'Gentle Repose', 'Hold Person', 
	      						'Locate Object', 'Prayer of Healing', 'Protection from Poison', 'Silence', 'Warding Bond', 'Zone of Truth'],
	      	bonus: 				['Healing Word', 'Sanctuary', 'Shield of Faith', 'Spiritual Weapon'],
			conc: 				['Bane', 'Bless', 'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Protection from Evil and Good', 'Shield of Faith', 'Calm Emotions', 
								'Enhance Ability', 'Hold Person', 'Locate Object', 'Silence'],
			domain: 			["Bless", "Cure Wounds", "Lesser Restoration", "Spiritual Weapon"],
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
	      	castingScreenHide: "hidden",
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
	    this.startCasting = this.startCasting.bind(this);
	    this.spellWasCast = this.spellWasCast.bind(this);
	    this.selectMaker = this.selectMaker.bind(this);
	    this.handleClick = this.handleClick.bind(this);
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
			chosenArrOne.sort();
			match=1;
		} else if (this.state.secondLevelChoice.includes(spell)) {
			arr = this.state.secondLevelChoice;
			chosenArrTwo.push(spell);
			chosenArrTwo.sort();
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

	//removes spell adds back to appropriate levelchoice
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

	//hides choose spell screen when begin is clicked
	startCasting() {
		console.log("start casting");

		//hides choose screen
		this.setState({
			chooseScreenHide: "hidden",
			castingScreenHide: ""
		})
	}

	//decreases spell slots remaining when clicked
	spellWasCast(level) {
		if (level == 1 && this.state.levelOneSlots > 0) {
			let int = this.state.levelOneSlots - 1;
			this.setState({
				levelOneSlots: int
			})
		} else if (level == 2 && this.state.levelTwoSlots > 0) {
			let int = this.state.levelTwoSlots - 1;
			this.setState({
				levelTwoSlots: int
			})
		}
	}

	//customer select multiple box due to mobile Safari constraints
	selectMaker(val, i, type) {
  		let bonus=this.state.bonus.includes(val);
  		let domain=this.state.domain.includes(val);
  		let conc=this.state.conc.includes(val);

  		return(
  			<div key={val} className='selectable' onClick={this.handleClick} val={val} data={type} style={{paddingLeft:18, width:'100%'}}>
  			{val}
  			{bonus||conc||domain?' (':null}
			{domain?'D':null}
			{bonus?'B':null}
			{conc?'C':null}
			{bonus||conc||domain?')':null}
			</div>
  		)
  	}

  	//removes spell from chosen spells if its not a domain spell
  	handleClick(e) {

		//get spell name with add-ons, remove add-ons
		let spell=e.currentTarget.getAttribute('val');
		let calledFrom=e.currentTarget.getAttribute('data');

		//testing
		console.log(spell);
		console.log('called from a ' + e.currentTarget.getAttribute('data'));

		if (!this.state.domain.includes(spell) && calledFrom=='chosen') {
			console.log("this is not a domain spell");
			this.removeChosen(spell);
		}

		if (!this.state.spellChoiceNumber == 0 && calledFrom=='choice') {
			console.log("choice");
			this.updateSpellChoiceNumber(spell);
		}
	}

	//passes spell name to getSpellUrl()
	componentDidMount() {
		this.getSpellUrl(this.state.firstLevel[6]);		
	}

	//takes spell name gets spell url from API
	getSpellUrl(name) {
		let Http = new XMLHttpRequest();
		let url='http://www.dnd5eapi.co/api/spells/?name='+ name;
		Http.open("GET", url);
		Http.send();
		Http.onreadystatechange=(e)=>{
			this.getSpellData(JSON.parse(Http.responseText).results[0].url);
		}
	}

	//takes spell URL and gets data from API
	getSpellData(url) {
		let Http = new XMLHttpRequest();
		Http.open("GET", url);
		Http.send();
		Http.onreadystatechange=(e)=>{
		console.log(JSON.parse(Http.responseText).name);		
		console.log(JSON.parse(Http.responseText).casting_time);
		console.log(JSON.parse(Http.responseText).range);
		console.log(JSON.parse(Http.responseText).components);
		console.log(JSON.parse(Http.responseText).concentration);
		console.log(JSON.parse(Http.responseText).duration);
		console.log(JSON.parse(Http.responseText).desc[0]);
		console.log(JSON.parse(Http.responseText).high_level);
		}
	}




	render() {

		return (
			<div>

				<h2 className='my-title'>Spell Selector</h2>

				<Begin 
					hide={this.state.chooseScreenHide}
					handleClick={this.startCasting}/>

				<CastingScreen 
					hide={this.state.castingScreenHide}
					levelOne={this.state.levelOneSlots}
					levelTwo={this.state.levelTwoSlots}
					reduceNumber={this.spellWasCast}/>

				<PreparedSpells 
					hide={this.state.castingScreenHide}
					levelOneSpells={this.state.choseFirst}
					levelTwoSpells={this.state.choseSecond}/>

				<div className={this.state.startScreenHide}>

					<div style={{marginBottom:25}}>
						<LevelChooser
							onChange = {this.changeClericLevel}
							level={this.state.clericLevel}
							hide = {this.state.startScreenHide}/>

						<WisModChooser
							onChange = {this.changeWisMod}
							wisMod={this.state.wisdomMod}
							hide = {this.state.startScreenHide}/>
					</div>
				</div>

				<PrepareButton
					handleClick = {this.hideForChoosing}
					hide={this.state.startScreenHide}/>

				<Chosen 
					hide = {this.state.chooseScreenHide}
					chosenOne = {this.state.choseFirst}
					chosenTwo = {this.state.choseSecond}
					level = {this.state.clericLevel}
					selectMaker={this.selectMaker}/>

				<ChoicesLeft 
					hide = {this.state.chooseScreenHide}
					spellNumber = {this.state.spellChoiceNumber}/>

				<SpellChoosing
					hide = {this.state.chooseScreenHide}
					levelOne = {this.state.firstLevelChoice}
					levelTwo = {this.state.secondLevelChoice}
					level={this.state.clericLevel}
					selectMaker={this.selectMaker}/>

			</div>
			)
	}
}
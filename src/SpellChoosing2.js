import React, { Component } from 'react';
import './App.css';

export class SpellChoosing2 extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		//this.convertToBaseName = this.convertToBaseName.bind(this);
	}

	//function is called whenever a spell button is clicked on
	//converts spell to its base name if necessary and passes it to Parent.js' updateSpellChoiceNumber function
	handleClick(e) {

		if (this.props.spellNumber === 0) {
			this.clearSelected();	
			return null;
		}

		let spell=e.currentTarget.value;

		//passes base spell name to Parent.js' updateSpellChoiceNumber function
		this.props.onClick(spell);	
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

		//takes each first level spell and makes it into a button, plus adds a bonus action or concentration spell marker
		for (var i=0; i<this.props.levelOne.length; i++) {
			levelOneArray.push(<option key={"levelOne"+i} onClick={this.handleClick} value={this.props.levelOne[i]}>
				{this.props.levelOne[i]}
				{bonusAction.includes(this.props.levelOne[i])||conSpell.includes(this.props.levelOne[i])?' (':null}
				{bonusAction.includes(this.props.levelOne[i])?'B':null}
				{conSpell.includes(this.props.levelOne[i])?'C':null}
				{bonusAction.includes(this.props.levelOne[i])||conSpell.includes(this.props.levelOne[i])?')':null}
				</option>

			);
		}

		//takes each second level spell and makes it into a button, plus adds a bonus action or concentration spell marker
		for (var j=0; j<this.props.levelTwo.length; j++) {
			levelTwoArray.push(<option key={"levelTwo"+j} onClick={this.handleClick} value={this.props.levelTwo[j]}>
				{this.props.levelTwo[j]}
					{bonusAction.includes(this.props.levelTwo[j])||conSpell.includes(this.props.levelTwo[j])?' (':null}
					{bonusAction.includes(this.props.levelTwo[j])?'B':null}
					{conSpell.includes(this.props.levelTwo[j])?'C':null}
					{bonusAction.includes(this.props.levelTwo[j])||conSpell.includes(this.props.levelTwo[j])?')':null}
				</option>

			);
		}


		return (

			//this won't show until "prepare now" button is clicked in SelectionHeader.js
			<div className={this.props.hide} style={{textAlign:'center'}}>
				{/*Number of spells gets updated each time a spell is clicked*/}
				<div className="choose">Choose <span className='blue'>{this.props.spellNumber}</span> (click to add)</div>

				{/*shows all first level spells minus domain spells*/}
				<select multiple id="level1options" style={{width:300, height:200}}>
					<optgroup label="Level One">
					{levelOneArray}
					</optgroup>

					{this.props.level > 2 && 				
						<optgroup label="Level Two">
							
								{levelTwoArray}
							
						</optgroup>
					}
				</select>

			
			</div>
		);
	}

}
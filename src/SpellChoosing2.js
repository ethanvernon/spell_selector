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

		console.log(e.currentTarget.value);

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

		return (

			//this won't show until "prepare now" button is clicked in SelectionHeader.js
			<div className={this.props.hide} style={{textAlign:'center'}}>

				{/*Number of spells gets updated each time a spell is clicked*/}
				<div className="choose">Choose <span className='blue'>{this.props.spellNumber}</span> (click to add)</div>


				<div className="my-custom-select">
					<b>Level One</b>
					{this.props.levelOne.map((val, i) => this.props.selectMaker(val, i, 'choice'))}

					{this.props.level > 2 &&
						<div>
						<b>Level Two</b>
						{this.props.levelTwo.map((val, i) => this.props.selectMaker(val, i, 'choice'))}
						</div>
					}
				</div>
			
			</div>
		);
	}

}
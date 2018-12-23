import React, { Component } from 'react';
import './App.css';

export class Chosen extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log("click detected");
	}

	render() {

		let levelOneArray=[];
		let levelTwoArray=[];

		let bonusAction=['Healing Word', 'Sanctuary', 'Shield of Faith', 'Spiritual Weapon'];
		let conSpell=['Bane', 'Bless', 'Detect Evil and Good', 'Detect Magic', 'Detect Poison and Disease', 'Protection from Evil and Good', 'Shield of Faith', 'Calm Emotions', 
		'Enhance Ability', 'Hold Person', 'Locate Object', 'Silence'];
		let domainSpell=this.props.domainSpellsFirst.concat(this.props.domainSpellsSecond);

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

		if (this.props.chosenTwo.length) {
			for (var i=0; i<this.props.chosenTwo.length; i++) {
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
			<div className={this.props.hide} style={{border:"1px solid white", height:"8em"}}>
				<p>Chosen (click to remove):</p>
				{this.props.chosenOne.length > 0 && 				
					<div>
						First level: {levelOneArray}
					</div>
				}
				{this.props.chosenTwo.length > 0 && 				
					<div>
						Second level: {levelTwoArray}
					</div>
				}
			</div>
		);
	}
}
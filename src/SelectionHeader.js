import React, { Component } from 'react';
import './App.css';

export class SelectionHeader extends Component {
  	constructor(props) {
	    super(props);
	    this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.handleClick();
	}


	render() {
		return (
			<div>
				<h2 style={{marginBottom:0}}>Spell Selector</h2>
				<div className={this.props.hide}>
					<p style={{fontSize:14, maxWidth:350}}>You are a level <span className='blue'>{this.props.level}</span> Life Cleric. At this level, you 
					know <span className='blue'>{this.props.cantripsKnown}</span> cantrips, 
					and may use<span className='blue'>&nbsp;{this.props.levelOne}</span> 1<sup>st</sup> level spell slots
					
					{this.props.levelTwoAvail == true &&
						<span>, and <span className='blue'>{this.props.levelTwo}</span> 2<sup>nd</sup> level spell slots</span>
					}

					. With your Wisdom modifier (<span className='blue'>{this.props.wisMod}</span>), you may prepare <span className='blue'>{this.props.spellNumber}</span> spells.</p>
					<button onClick={this.handleClick}>Prepare now</button>
				</div>
			</div>
		)
	}

}
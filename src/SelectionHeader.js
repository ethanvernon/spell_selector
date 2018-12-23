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
				<div className={this.props.hide} style={{maxWidth:350, marginLeft:'auto', marginRight:'auto'}}>
					<p style={{fontSize:16}}>You are a level <span className='blue'>{this.props.level}</span> Life Cleric. At this level, you 
					know <span className='blue'>{this.props.cantripsKnown}</span> cantrips, 
					and may use<span className='blue'>&nbsp;{this.props.levelOne}</span> 1<sup>st</sup> level spell slots
					
					{this.props.levelTwoAvail == true &&
						<span>, and <span className='blue'>{this.props.levelTwo}</span> 2<sup>nd</sup> level spell slots</span>
					}

					. With your Wisdom modifier (<span className='blue'>{this.props.wisMod}</span>), you may prepare <span className='blue'>{this.props.spellNumber}</span> spells.</p>
					<button className="center-button" onClick={this.handleClick}>Prepare now</button>
				</div>
			</div>
		)
	}

}
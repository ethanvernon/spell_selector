import React, { Component } from 'react';
import './App.css';

export class SpellChoosing extends Component {
	constructor(props) {
		super(props);
		//this.convertToBaseName = this.convertToBaseName.bind(this);
	}

	render() {

		return (

			//this won't show until "prepare now" button is clicked in SelectionHeader.js
			<div className={this.props.hide} style={{textAlign:'center'}}>

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
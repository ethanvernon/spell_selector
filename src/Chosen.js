import React, { Component } from 'react';
import './App.css';

export class Chosen extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (

			//only shows when "Prepare Now" has been clicked in SelectionHeader.js
			<div className={this.props.hide}>
				
					<b><span className="choose">Chosen (click to remove):</span></b><br/>
					<div className="my-custom-select">
						<b>Level One</b>
						{this.props.chosenOne.map((val, i) => this.props.selectMaker(val, i, 'chosen'))}

						{this.props.level > 2 &&
							<div>
							<b>Level Two</b>
							{this.props.chosenTwo.map((val, i) => this.props.selectMaker(val, i, 'chosen'))}
							</div>
						}
					</div>
				
			</div>
		);
	}
}
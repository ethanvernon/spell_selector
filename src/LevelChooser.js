import React, { Component } from 'react';
import './App.css';

export class LevelChooser extends Component {
  	constructor(props) {
	    super(props);
	    this.handleLevel = this.handleLevel.bind(this);
	}

	handleLevel(e) {
    	this.props.onChange(parseInt(e.target.value));
	}


	render() {
		return (
			<div className={this.props.hide} style={{marginTop:20}}>
				<span style={{fontSize:16, marginRight:10}}>Choose your level:</span>
				<input 
					style={{textAlign:'center'}}
		        	id="clericLevel"
		        	type="number"
		        	min="1"
		        	max="4"
		        	defaultValue={this.props.level} 
		        	onInput = {this.handleLevel}/> 
			</div>
		);
	}
}
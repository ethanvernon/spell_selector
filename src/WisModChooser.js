import React, { Component } from 'react';
import './App.css';

export class WisModChooser extends Component {
  	constructor(props) {
	    super(props);
	    this.handleMod = this.handleMod.bind(this);
	}

	handleMod(e) {
    	this.props.onChange(parseInt(e.target.value));
	}


	render() {
		return (
			<div className={this.props.hide}>
				<span style={{fontSize:16, marginRight:10}}>Choose your Wisdom modifier:</span>
				<input 
					style={{textAlign:'center'}}
		        	id="wisMod"
		        	type="number"
		        	min="-3"
		        	max="5"
		        	defaultValue={this.props.wisMod} 
		        	onInput = {this.handleMod}/> 
			</div>
		);
	}
}
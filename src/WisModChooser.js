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
			<div className={this.props.hide} style={{marginTop:20, width:350, marginLeft:'auto', marginRight:'auto'}}>
				<span style={{fontSize:16, marginRight:10, textAlign:'left'}}>Choose your Wisdom modifier:</span>
				<input 
					style={{textAlign:'center', display:'flex', float:'right', width:75}}
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
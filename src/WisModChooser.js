import React, { Component } from 'react';
import './App.css';

export class WisModChooser extends Component {
  	constructor(props) {
	    super(props);
	    this.handleMod = this.handleMod.bind(this);
	}

	//passes value of input to Parent.js changeWisMod function which updats states
	handleMod(e) {
    	this.props.onChange(parseInt(e.target.value));
	}


	render() {
		let myClass="row " + this.props.hide;

		return (
			<div className={myClass} style={{marginTop:20, marginLeft:'auto', marginRight:'auto'}}>

				<div className='col-xs' style={{fontSize:16, marginRight:10, textAlign:'left'}}>Choose your Wisdom modifier:</div>
				<input 
					className='col-xs'
					style={{textAlign:'center', marginLeft:'auto', marginRight:'auto', width:75}}
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
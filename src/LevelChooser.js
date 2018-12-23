import React, { Component } from 'react';
import './App.css';

export class LevelChooser extends Component {
  	constructor(props) {
	    super(props);
	    this.handleLevel = this.handleLevel.bind(this);
	}

	//passes input value to Parent.js' changeCleric Level function which updates states
	handleLevel(e) {
    	this.props.onChange(parseInt(e.target.value));
	}


	render() {
		return (
			<div className={this.props.hide} style={{marginTop:20, width:350, marginLeft:'auto', marginRight:'auto'}}>
				<span style={{fontSize:16, marginRight:10, textAlign:'left'}}>Choose your level:</span>
				<input 
					style={{textAlign:'center', display:'flex', float:'right', width:75}}
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
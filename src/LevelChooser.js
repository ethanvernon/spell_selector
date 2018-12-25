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
		let myClass="row " + this.props.hide;

		return (
			<div className={myClass} style={{marginTop:20, maxWidth:350, marginLeft:'auto', marginRight:'auto'}}>
				<div className='col-xs' style={{fontSize:16, marginRight:10, textAlign:'left'}}>Choose your level:</div>
				<input
					className='col-xs' 
					style={{textAlign:'center', marginLeft:'auto', marginRight:'auto', width:75}}
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
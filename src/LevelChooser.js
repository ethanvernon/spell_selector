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
			<div className={this.props.hide} style={{marginLeft:'auto', marginRight:'auto', marginBottom:10}}>
				<div className='col-xs' style={{fontSize:16, fontWeight:'bold'}}>Cleric level:</div>
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
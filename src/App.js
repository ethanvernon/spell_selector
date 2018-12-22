import React, { Component } from 'react';
import './App.css';
import {Parent} from './Parent';

class App extends Component {
  render() {
    return (
    	<div className="App">
      		<body className="App-header">
      			<Parent/>
      		</body>
      	</div>
    );
  }
}

export default App;

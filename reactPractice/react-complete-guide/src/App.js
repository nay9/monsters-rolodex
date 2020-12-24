import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <button>Switch Name</button>
        <Person name="rene g">My Hobbies: Poo</Person>
      </div>
    );
   }
}

export default App;

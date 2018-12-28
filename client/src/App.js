import React, { Component } from 'react';
import Connection from './components/Connection/Connection';
import CodeEditor from './components/CodeEditor/CodeEditor';
import StepByStep from './components/StepByStep/StepByStep';
import Guide from './components/Guide/Guide';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>App-A-Day! The choice way to ease yourself in to the hectic world of coding!</h1>
        <Connection />
        <CodeEditor />
        <StepByStep />
        <Guide />
      </div>
    );
  }
}

export default App;

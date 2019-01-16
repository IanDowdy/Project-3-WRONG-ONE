import React, { Component } from 'react';



import CodeEditor from '../CodeEditor/CodeEditor';
import StepByStep from '../StepByStep/StepByStep';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
       <h1>App-A-Day! The choice way to ease yourself in to the</h1>
         <h2 id="title">hectic world of coding!</h2>
        <CodeEditor />
        <StepByStep />
      </div>
    );
  }
}

export default Home;

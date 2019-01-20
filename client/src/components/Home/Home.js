import React, { Component } from 'react';

import Lessons from "../Lessons/Lessons";

import CodeEditor from '../CodeEditor/CodeEditor';
import StepByStep from '../StepByStep/StepByStep';


import './Home.css';


class Home extends Component {
  render() {
    return (
      <div className="App">
      
      <div className="ui container">
       <h1>App-A-Day! The choice way to ease yourself in to the</h1>
         <h2 id="title"><i className="fas fa-code-branch"></i>hectic world of coding!</h2>
         </div>
         
        <CodeEditor />
        <Lessons />
        <StepByStep />

      </div>
    );
  }
}

export default Home;

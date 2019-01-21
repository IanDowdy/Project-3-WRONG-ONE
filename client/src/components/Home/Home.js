import React, { Component } from 'react';

import Lessons from "../Lessons/Lessons";

import CodeEditor from '../CodeEditor/CodeEditor';
import StepByStep from '../StepByStep/StepByStep';
import Header from '../../components/Header/Header';


import './Home.css';


class Home extends Component {
  render() {
    return (
      <div>
      <Header />
      
      <div className="App">
      <div className="ui equal width center aligned padded grid">
      <div className="column">
      
      <div className="first">
       <h1 className="dark">App-A-Day! The choice way to ease yourself in to the</h1>
         <h2 id="title"><i className="fas fa-code-branch" id="icon"></i>hectic world of coding!!</h2>
         </div>
        
         
         
        <CodeEditor />
        <Lessons />
        <StepByStep />
        </div>
        </div>
      </div>
      </div>
      
     
    );
  }
}

export default Home;

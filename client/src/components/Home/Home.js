import React, { Component } from 'react';



import CodeEditor from '../CodeEditor/CodeEditor';
import StepByStep from '../StepByStep/StepByStep';
import AppNavbar from '../AppNavbar';
import ShoppingList from '../ShoppingList';
import './Home.css';
import Lessons from '../Lessons/Lessons';

class Home extends Component {
  render() {
    return (
      <div className="App">
       <h1>App-A-Day! The choice way to ease yourself in to the hectic world of coding!</h1>
        <AppNavbar />
        <ShoppingList />
        <Connection />
        <CodeEditor />
        <StepByStep />

      </div>
    );
  }
}

export default Home;

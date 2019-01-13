import React, { Component } from 'react';
import Buttons from './components/Buttons';
import HTMLContainer from './components/HTMLContainer';

class Guide extends Component {
  render() {
    return (
      <div className="App">
        <Buttons />
       <HTMLContainer />
      </div>
    );
  }
}

export default Guide;

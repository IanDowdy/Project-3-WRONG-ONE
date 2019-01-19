import React, { Component } from 'react';
import Connection from "../Connection/Connection";


import './About.css';

class About extends Component {
  render() {
    return (
      <div>
      
      <div className="App">
       <h1>Who we are, what we're about, what this app is and</h1>
         <h2 id="title">what we hope to accomplish with it.</h2>
         <div className="ui relaxed divided list">
         <div className= "item">
         <img className="ui avatar image" alt=""src="../../assets/images/kobu.jpg" />
          <div className="content">
          <div className="header">
         <Connection />
         </div>
         </div>
         </div>
         </div>
      </div>
      </div>
    );
  }
}

export default About;

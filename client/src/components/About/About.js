import React, { Component } from 'react';
import Team from "./Team/Team";
import AboutUS from "./AboutUS/AboutUS";
import Contact from "./Contact/Contact";

import './About.css';

class About extends Component {
  render() {
    return (
      <div className="container">


        <div className="aboutChange ui container">
          <h1>A Little About App-A-Day!</h1>

          <AboutUS />

          <div className="item">
            <div className="content">
              <div className="header">
              </div>
            </div>
          </div>

        </div>

        <div className="aboutTeam ui container">
          <Team />


        </div>

        <div className="aboutContact ui container">
          <Contact />


        </div>





        {/* <div className="connection">
           
          </div> */}









      </div >

    );
  }
}

export default About;

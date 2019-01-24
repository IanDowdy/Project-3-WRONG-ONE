import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import './Learn.css';

class Learn extends Component {
  render() {
    return (
      <div>
      <div className="learn">
        <h1> HTML</h1>
        <a href="https://learn.freecodecamp.org/responsive-web-design/basic-html-and-html5/create-a-form-element/">Create a form element</a>
        <h1> CSS</h1>
      <a href="https://learn.freecodecamp.org/responsive-web-design/basic-css/style-multiple-elements-with-a-css-class">Style multiple elements with a CSS class</a>
      <h1> JavaScript</h1>
      <a href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/store-multiple-values-in-one-variable-using-javascript-arrays">Store multiple values in one variable using JavaScript arrays</a>
      <Footer />
      </div>
      </div>
    );
  }
}

export default Learn;
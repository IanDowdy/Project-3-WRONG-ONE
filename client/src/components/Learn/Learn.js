import React, { Component } from 'react';
import './Learn.css';

class Learn extends Component {
  render() {
    return (<div>
      <div class="editor">
         
       <iframe className="editor-container" src="https://stackblitz.com/edit/js-qkcdf5?embed=1&file=index.js" view="Editor" title="code editor"></iframe>
         
      </div>
          <div class="accordion" id="accordionExample">

          <div class="card">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Solution
                </button>
              </h5>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div class="card-body">
                <p>incrementedNumber++ <span class="commented">//expected output: 2</span></p>
                <p><strong>You can also decrement a number using the -- operator:</strong></p>
                <p>let decrementedNumber = 4</p>
                <p>decrementedNumber-- <span class="commented">//expected output: 3</span></p>
                
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Comments
                </button>
              </h5>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div class="card-body">
                Add your feedback! Too easy? Too difficult?
                
                <div class="userComments"><button type="button" class="btn btn-success">Add a Comment</button></div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default Learn;
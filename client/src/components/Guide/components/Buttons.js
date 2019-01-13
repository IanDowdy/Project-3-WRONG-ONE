import React, { Component } from 'react';
import { Button, ButtonGroup} from 'reactstrap';

class Buttons extends Component {
  render() {
    return (
      <div className="Guide">
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      </div>
    );
  }
}

export default Buttons;

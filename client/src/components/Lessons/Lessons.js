import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Lessons extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Lessons
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>(lesson name)</DropdownItem>
          <DropdownItem>(lesson name 2)</DropdownItem>
          <DropdownItem disabled>(lesson being added/disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>etc</DropdownItem>
          <DropdownItem>etc</DropdownItem>
          <DropdownItem>whatever else</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default Lessons;
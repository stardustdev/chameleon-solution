/* 

Prompt:
  We have defined a basic dropdown via the Dropdown and DropdownItem components below, with example usage in the ExampleNav component.
  The Dropdown and DropdownItem components have some problems, and also have room for improvements.
  Please fix any obvious bugs you see with the dropdown, and explain your reasoning.
  Please then describe some improvements you would make to the dropdown, and how you would implement them.
  Consider the different contexts in which you might use this dropdown and what changes might be neccessary to make it more flexible.
  
  Follow up question: if we wanted to sync this dropdown selection to the server with app.sync('PATCH', 'user', { dropdown_1_state: {true,false} }) where would this be included
  
  PS: No need to worry about CSS.

 */

import React, {PureComponent} from 'react';

class Dropdown extends PureComponent {
  constuctor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this); // need to bind the method
  }

  toggle() {
    const {isOpen} = this.state;

    this.setState({isOpen: !isOpen}); // need to toggle status
  }

  render() {
    const {isOpen} = this.state;
    const {label} = this.props;

    return (
      <div className="dropdown">
        <button
          type="button"
          className="dropdown-button"
          id="dropdownButton"
          aria-haspopup="true"
          aria-expended={isOpen}
          onClick={this.toggle}
        >
          {label}
        </button>
        {isOpen && // no need to solve with css, can show dropdownmenu with compare isOpen variable
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownButton"
          role="menu"
        >
          {this.props.children}
        </ul>
        }
      </div>
    );
  }
}

class DropdownItem extends PureComponent {
  render() {
    // TODO implement me
    <a href={this.props.href}>{this.props.children}</a>
  }
}

class ExampleNav extends PureComponent {
  render() {
    return (
      <nav>
        <a href="/page1">Page 1</a>
        <Dropdown label="More items">
          <DropdownItem href="/page2">Page 2</DropdownItem>
          <DropdownItem href="/page3">Page 3</DropdownItem>
          <DropdownItem href="/page4">Page 4</DropdownItem>
        </Dropdown>
        <Dropdown label="Even more items">
          <DropdownItem href="/page5">Page 5</DropdownItem>
          <DropdownItem href="/page6">Page 6</DropdownItem>
        </Dropdown>
      </nav>
    );
  }
}
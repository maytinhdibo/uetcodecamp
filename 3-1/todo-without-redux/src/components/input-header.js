import React, { Component } from 'react';
import alertText from './../dom.js';
class Header extends Component {
  addNew = () => {
    if (document.querySelector("#input").value.length < 1) {
      alertText("Your text is empty!");
    } else {
      this.props.addNew(document.querySelector("#input").value);
      document.querySelector("#input").value = "";
      alertText("New reminder has been added!");
    }
  }

  enterKey = (e) => {
    if (e.key === 'Enter') {
      this.addNew();
      return false;
    }
  }
  render() {
    return (
      <div id="header">
        <span>Add new work</span>
        <input id="input" onKeyPress={this.enterKey} placeholder="Type a remind...." type="text" /><button onClick={this.addNew} id="add">Add</button>
      </div>
    )
  }
}
export default Header;
import React, { Component } from 'react';

class Header extends Component {
    addNew=()=>{
        this.props.addNew(document.querySelector("#input").value);
        document.querySelector("#input").value="";
    }
    render() {
      return (
        <header>
          <span id="appname">MY TO DO LIST</span>
          <input id="input" placeholder="Type a remind...." type="text" /><button onClick={this.addNew} id="add">Add</button>
        </header>
      )
    }
  }
export default Header;
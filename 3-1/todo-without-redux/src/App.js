import React, { Component } from 'react';
import './App.css';

var jsonData = [];
const datasample = [
  {
    title: "Buy eggs",
    status: 1
  },
  {
    title: "Read a book",
    status: 0
  },
  {
    title: "Organize office",
    status: 0
  },
  {
    title: "UET Code Camp 2018",
    status: 0
  }
]

class Header extends Component {
  render() {
    return (
      <header>
        <span id="appname">MY TO DO LIST</span>
        <input id="input" placeholder="Type a remind...." type="text" /><button id="add">Add</button>
      </header>
    )
  }
}

class List extends Component {
  render() {
    var data = this.props.data.map((dataitem) => {
    return <li className={dataitem.status==0?"none":"done"}><span>{dataitem.title}</span><button className="remove">&#x2715;</button></li>;
    })
    var dataa=1;
    return (
      <div id="list">
        {data}
        <div id="empty">
          <br />
          <img alt="empty icon" src="img/empty.png" />
          <span>This list is empty!</span>
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    if (localStorage.datatodo == null) {
      localStorage.datatodo = JSON.stringify(datasample);
    }
    jsonData = JSON.parse(localStorage.datatodo);
    this.state = {
      data: jsonData
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <List data={this.state.data} />
        <div id="alert">
          Your alert
        </div>

      </div>
    );
  }
}

export default App;

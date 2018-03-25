import React, { Component } from 'react';
import './App.css';
import List from './components/list.js';
import Header from './components/input-header.js';
import alertText from './dom.js';

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

class App extends Component {

  constructor(props) {
    super(props);
    if (localStorage.datatodo == null) {
      localStorage.datatodo = JSON.stringify(datasample);
    }
    jsonData = JSON.parse(localStorage.datatodo);
    this.state = {
      data: jsonData,
      text: "",
      alert: "Sample text"
    }
  }
  addNew = (text) => {
    this.state.data.push({ title: text, status: 0 });
    this.setState({ data: this.state.data });
    localStorage.datatodo = JSON.stringify(this.state.data);
  }
  removeItem = (id) => {
    this.state.data.splice(id, 1);
    this.setState({ data: this.state.data });
    localStorage.datatodo = JSON.stringify(this.state.data);
    alertText("Removed!");
  }
  doneItem = (id) => {
    if (this.state.data[id].status == 1) {
      this.state.data[id].status = 0;
      alertText("Undone!");
    } else {
      this.state.data[id].status = 1
      alertText("Done!");
    }
    this.setState({ data: this.state.data });
    localStorage.datatodo = JSON.stringify(this.state.data);
  }
  render() {
    return (
      <div className="App">
      <header>
      <span id="appname">MY TO DO LIST</span>
      </header>
        <Header addNew={this.addNew} />
        <List data={this.state.data} removeItem={this.removeItem} doneItem={this.doneItem} />
        <div id="alert">
          {this.state.alert}
        </div>

      </div>
    );
  }

}

export default App;

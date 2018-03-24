import React, { Component } from 'react';
import './App.css';
import List from './components/list.js';
import Header from './components/input-header.js';

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
      data: jsonData
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
  }
  doneItem = (id) => {
    if (this.state.data[id].status == 1) {
      this.state.data[id].status = 0;
    } else {
      this.state.data[id].status = 1
    }
    this.setState({ data: this.state.data });
    localStorage.datatodo = JSON.stringify(this.state.data);
  }
  render() {
    return (
      <div className="App">
        <Header addNew={this.addNew} />
        <List data={this.state.data} removeItem={this.removeItem} doneItem={this.doneItem} />
        <div id="alert">
          Your alert
        </div>

      </div>
    );
  }

}

export default App;

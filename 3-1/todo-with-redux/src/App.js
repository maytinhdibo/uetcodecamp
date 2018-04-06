import React, { Component } from 'react';
import './App.css';
import List from './components/list.js';
import Header from './components/input-header.js';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'

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
  render() {
    return (
     
        <div className="App">
          <Header addNew={this.addNew} />
          <List/>
          <div id="alert">
            Your alert
        </div>
        </div>
     
    );
  }
}

function mapStatetoProps(state) {
  return { data: state }
}
export default connect(mapStatetoProps)(App);

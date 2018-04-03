import React, { Component } from 'react';
import './../App.css';
import './../Home.css';
import List from './../components/list.js';
import { Link } from "react-router-dom";
import Header from './../components/input-header.js';
import {alertText,offalertText, alertAtHome} from './../dom.js';
import { dataAPI, createTodo, deleteTodo, toggleTodo } from './../services/API.js';

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

var action="Load";

class Home extends Component {
  state = [];
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
  getListToDo() {
    alertText("Loading....");
    dataAPI().then(object => {
      const { data, success } = object;
      if (success) {
        offalertText();
        this.setState({
          data: data
        })
      }
    });
  }
  componentDidMount() {
    this.getListToDo();
  }
  addNew = (text) => {
    createTodo(text).then(() => {
      this.getListToDo();
    });
  }
  removeItem = (id) => {
    deleteTodo(id).then(() => {
      this.getListToDo();
    });
    alertText("Removing....");
  }
  doneItem = (id) => {
    toggleTodo(id).then(() => {
      this.getListToDo();
    });
    alertText("Checking....");
  }
  render() {
    return (
      <div className="App">
        <header>
          <span id="appname">MY TO DO LIST</span>
          <div id="account">
          <span class="icon">C</span>
          <span class="name">Trần Mạnh Cường</span>
         <Link to="/"> <span class="logout">Đăng xuất</span></Link>
          </div>
        </header>
        <Header addNew={this.addNew} text={this.state.text} />
        <List data={this.state.data} removeItem={this.removeItem} doneItem={this.doneItem} />
      </div>
    );
  }

}

export default Home;

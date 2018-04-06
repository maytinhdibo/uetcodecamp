import React, { Component } from 'react';
import './../App.css';
import './../Home.css';
import List from './../components/list.js';
import { Link } from "react-router-dom";
import Header from './../components/input-header.js';
import {alertText,offalertText, alertAtHome} from './../dom.js';
import { dataAPI, createTodo, deleteTodo, toggleTodo } from './../services/API.js';
import {Route,Switch} from "react-router-dom";
import Info from './Info';
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
    const self=this;
    setInterval(function(){ 
      dataAPI().then(object=>{
        if(JSON.stringify(object.data)==JSON.stringify(self.state.data)){
          console.log("Không đổi");
          console.log(object.data);
          console.log(self.state.data);
        }else{
          console.log("Đổi");
          self.setState({
            data: object.data
          });
        }
      })
     }, 1000);
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
          <Link to="/home/info"> <span class="logout">App Info</span></Link>
         <Link to="/"> <span class="logout">Logout</span></Link>
          </div>
        </header>
        <Header addNew={this.addNew} text={this.state.text} />
        <List data={this.state.data} removeItem={this.removeItem} doneItem={this.doneItem} />
        
        <Switch>
          <Route path="/home/info" component={Info}/>
          </Switch>
         
      </div>
    );
  }

}

export default Home;

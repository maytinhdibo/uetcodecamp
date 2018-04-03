import React, { Component } from 'react';
import {Route,Switch} from "react-router-dom";
import Home from "./page/Home"
import Login from "./page/Login"
import Signup from "./page/Signup"
class App extends Component {
  render(){
    return(
      <div>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/" exact component={Login}/>
        <Route path="/signup" component={Signup}/>
        </Switch>
         <div id="alert"></div>
       </div>
    )
  }
}

export default App;
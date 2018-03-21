import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Child extends Component{
  render(){
    return(
      <p>Xin chao</p>
    )
  }
}

class App extends Component {
  state = {
    text: "Hello"
  }
  change() {
    this.setState({
      text: "hi"
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.text}
        <button onClick={this.change.bind(this)}>Click me</button>
        <Child/>
      </div>
    );
  }
}

export default App;

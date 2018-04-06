import React, { Component } from 'react';
import './App.css';
import List from './components/list.js';
import Header from './components/input-header.js';
import { connect } from 'react-redux'

const store = createStore(reducer);

class App extends Component {
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
function mapStatetoProps(state) {
    return { data: state }
}
export default App;

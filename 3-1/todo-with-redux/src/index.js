import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const defaultState=[
  {
    title:"2345"
  }
];

const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD":
     // 
      return state;
        break;
      case "REMOVE":
        let currentState = [...state, defaultState];
        currentState.push({title:344});
        return currentState;
        break;
      default:
        return state;
        break;
    }
  }
  const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

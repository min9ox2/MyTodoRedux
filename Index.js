import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
//import todoApp from './reducers'
import App from './components/App'

//let store = createStore(todoApp)

export default class Index extends Component {
  render() {
    return (
        //<Provider store={store}>
            <App />
        //</Provider>
    );
  }
}
import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
//import AddTodoContainer from './AddTodoContainer';
import AddTodoContainer from '../containers/AddTodoContainer';
import TodoListContainer from '../containers/TodoListContainer';
import Footer from './Footer';
import reducers from '../reducers';

let store = createStore(reducers)

export default class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<View>
					<AddTodoContainer />
					<TodoListContainer />
					<Footer />
				</View>
			</Provider>
		);
	}
}
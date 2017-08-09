import React, { Component } from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';

export default class Todo extends Component {
    render() {
		return (
			<Text
                onPress={() => this.props.toggleTodoHandler(this.props.id)}
                style={this.props.completed? styles.strike : styles.base}>
				{this.props.text}                
			</Text>
		);
    }
}

const styles = StyleSheet.create({
  base: {
	fontSize: 30,
	padding: 10,
	color: 'green',
  },
  strike: {
	fontSize: 30,
	color: 'gray',
	padding: 10
  },
});
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

export default class AddTodoForm extends Component {
    constructor() {
		super()
        this.state = {
            todoItem: ''
        }
    }
	render() {
		let {addTodoHandler} = this.props;    
		return (
			<View style={styles.container}>
			<TextInput 
				placeholder={'Add new item here'}
				onChangeText={(text)=> this.setState({todoItem: text})}
				value={this.state.todoItem}/>
			<Button title={'Add'} onPress={() => {
				this.setState({todoItem: ''})
				addTodoHandler(this.state.todoItem)
			}}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        /*flexDirection: 'row',
        alignItems: 'center'*/
        /*flex: 1,
        justifyContent: 'center',
        alignItems: 'center'*/        
    }
});
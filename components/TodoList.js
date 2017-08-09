import React, { Component } from 'react';
import {
  Text,
  //ListView,
  FlatList,
  StyleSheet
} from 'react-native';
import Todo from './Todo';

export default class TodoList extends Component {
	/*constructor(props) {
        super(props);        
        this.state = {
			todosDs: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        };        
    }

    componentDidMount() {
        let {todos} = this.props;  
        this.setState({
            todosDs: this.state.todosDs.cloneWithRows(todos),
        })
    }*/

    /*componentWillReceiveProps(newProps) {
        let {todos} = newProps;
        this.setState({
            todosDs: this.state.todosDs.cloneWithRows(todos),
        })
    }*/

    render() {
        let {todos, toggleTodoHandler} = this.props;
		if (! todos.length) {
			return <Text>No data</Text>
        }
        console.log('todos',todos);
        return (            
			<FlatList
                data={todos}
                renderItem={(rowData) => {
                    return <Todo {...rowData.item} toggleTodoHandler={toggleTodoHandler}/>
                }}
                keyExtractor={({id}) => id}
				//dataSource={this.state.todosDs}
				//renderRow={(rowData) => <Todo {...rowData} toggleTodoHandler={toggleTodoHandler}/>}
				style={styles.container}
			/>
		);
    }
}

const styles = StyleSheet.create({
    container: {
		marginTop: 20,
        /*flex: 1,
        justifyContent: 'center',
        alignItems: 'center'*/        
    }
});
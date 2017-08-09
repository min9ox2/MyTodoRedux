import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

const showVisibleOnly = (todos, visibleFilter) => {
    if (visibleFilter == 'COMPLETE') {
        return todos.filter(t => t.completed)
    } else if (visibleFilter == 'INCOMPLETE') {
        return todos.filter(t => !t.completed)
    }
    return todos
    /*todosDs = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    return todosDs.cloneWithRows(todos);*/
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleTodoHandler: (id) => dispatch(toggleTodo(id))
	}
}

const mapStateToProps = (state) => {
    return {
        todos: showVisibleOnly(state.todoReducer, state.filterReducer)
    }
}

let TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoListContainer
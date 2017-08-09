import AddTodoForm from '../components/AddTodoForm'

import { connect } from 'react-redux'
import { addTodo } from '../actions'

const mapDispatchToProps = (dispatch) => {
	return {
		addTodoHandler: (text) => dispatch(addTodo(text))
	}
}

let AddTodoContainer = connect(null, mapDispatchToProps)(AddTodoForm)

export default AddTodoContainer
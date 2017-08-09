import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import filterReducer from './filterReducer'

const todoApp = combineReducers({
  todoReducer,
  filterReducer
})

export default todoApp
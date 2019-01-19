import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { isNewlyAdded } from './NewTodoList'
import TodoList from '../components/TodoList'
import { todoListHeadingStyle } from '../styles'

const getActiveTodos = (todos) => {
  return todos
    .filter(t => !t.completed)
    .filter(t => !isNewlyAdded(t))
}

const mapStateToProps = state => ({
  todos: getActiveTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

const VisibleTodoList = (props) => (
  <div>
    <h3 style={todoListHeadingStyle}>All Tasks</h3>
    <TodoList {...props} />
  </div>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList)

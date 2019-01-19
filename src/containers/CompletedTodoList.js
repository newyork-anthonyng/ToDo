import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getCompletedTodos = (todos, filter) => {
  return todos.filter(t => t.completed);
}

const mapStateToProps = state => ({
  todos: getCompletedTodos(state.todos, state.visibilityFilter),
  isShowingCompletedTodos : state.visibilityFilter
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

const CompletedTodoList = (props) => {
  if (!props.isShowingCompletedTodos) return null;

  return <TodoList {...props} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompletedTodoList)

import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { todoListHeadingStyle } from '../styles'

// Return true if todo item was added within past five minutes
const NEWLY_ADDED_TIME_INTERVAL = 5 * 60 * 1000;
export const isNewlyAdded = todo => {
    return (Date.now() - todo.dateAdded) < NEWLY_ADDED_TIME_INTERVAL;
};

const mapStateToProps = state => ({
    todos: state.todos.filter(isNewlyAdded)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

const NewTodoList = (props) => {
    if (!props.todos.length) return null;

    return (
        <div>
            <h3 style={todoListHeadingStyle}>New Tasks</h3>
            <TodoList {...props} />
        </div>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewTodoList)
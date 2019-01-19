import React from 'react'
import PropTypes from 'prop-types'
import { todoListItemStyle } from '../styles'

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      ...todoListItemStyle
    }}
  >
    {completed ? '⚫' : '⚪'}
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo

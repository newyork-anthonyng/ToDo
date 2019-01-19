import React from 'react'
import PropTypes from 'prop-types'
import { todoListItemStyle } from '../styles'

const ENTER_KEY = 13
const SPACE_KEY = 32

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      ...todoListItemStyle
    }}
    tabIndex="0"
    onKeyDown={({ keyCode }) => {
      if (keyCode === ENTER_KEY || keyCode === SPACE_KEY) {
        onClick()
      }
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

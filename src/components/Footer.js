import React from 'react'
import PropTypes from 'prop-types'
import { toggleCompletedButtonStyle } from '../styles'

const Footer = ({ onClick, isShowingCompletedTodos }) => (
    <button
      style={toggleCompletedButtonStyle}
      onClick={() => onClick(!isShowingCompletedTodos)}
    >
      {isShowingCompletedTodos ? 'Hide' : 'Show'} Completed Tasks
    </button>
)

Footer.propTypes = {
  onClick: PropTypes.func.isRequired,
  isShowingCompletedTodos: PropTypes.bool.isRequired
}

export default Footer

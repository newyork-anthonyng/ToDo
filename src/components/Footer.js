import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ onClick, isShowingCompletedTodos }) => (
  <div>
    <button onClick={() => onClick(!isShowingCompletedTodos)}>
      {isShowingCompletedTodos ? 'Hide' : 'Show'} Completed Tasks
    </button>
  </div>
)

Footer.propTypes = {
  onClick: PropTypes.func.isRequired,
  isShowingCompletedTodos: PropTypes.bool.isRequired
}

export default Footer

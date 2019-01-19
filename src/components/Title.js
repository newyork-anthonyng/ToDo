import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ title, onChange }) => (
    <input
        type='text'
        onChange={onChange}
        placeholder='Add a to-do'
        value={title}
    />
)

Title.propTypes = {
    title: PropTypes.string,
    onChange: PropTypes.func.isRequired
}

export default Title
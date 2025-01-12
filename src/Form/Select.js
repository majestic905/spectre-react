import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  small: PropTypes.bool,
  large: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node
}

const Select = ({ children, className, small = false, large = false, error = false, success = false, ...attributes }) => {
  const classNames = classnames(
    'form-select',
    {
      'select-sm': small,
      'select-lg': large,
      'is-error': error,
      'is-success': success
    },
    className
  )

  return (
    <select {...attributes} className={classNames}>
      {children}
    </select>
  )
}

Select.propTypes = propTypes


export default Select

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  className: PropTypes.string,
  small: PropTypes.bool,
  large: PropTypes.bool,
  inline: PropTypes.bool,
  error: PropTypes.bool,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

const Radio = ({ children, className, small = false, large = false, inline = false, error = false, ...attributes }) => {
  const classNames = classnames(
    'form-radio',
    {
      'input-sm': small,
      'input-lg': large,
      'form-inline': inline,
      'is-error': error
    },
    className
  )

  return (
    <label className={classNames}>
      <input
        type='radio'
        {...attributes}
      />
      <i className='form-icon' />
      {children}
    </label>
  )
}

Radio.propTypes = propTypes

export default Radio

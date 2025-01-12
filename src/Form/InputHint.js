import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

const InputHint = ({ children, className, renderAs: Element = 'p', ...attributes }) => {
  const classNames = classnames(
    'form-input-hint',
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

InputHint.propTypes = propTypes

export default InputHint

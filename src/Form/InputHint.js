import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

const defaultProps = {
  renderAs: 'p'
}

const InputHint = ({ children, ...props }) => {
  const {
    className,
    renderAs: Element,

    ...attributes
  } = props

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
InputHint.defaultProps = defaultProps

export default InputHint

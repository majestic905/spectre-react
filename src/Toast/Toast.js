import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  error: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

const defaultProps = {
  renderAs: 'div'
}

const Toast = ({ children, ...props }) => {
  const {
    className,
    primary,
    success,
    warning,
    error,
    renderAs: Element,

    ...attributes
  } = props

  const classNames = classnames(
    'toast',
    {
      'toast-primary': primary,
      'toast-success': success,
      'toast-warning': warning,
      'toast-error': error
    },
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

Toast.propTypes = propTypes
Toast.defaultProps = defaultProps

export default Toast

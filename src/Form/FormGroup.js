import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  success: PropTypes.bool,
  error: PropTypes.bool,
}

const defaultProps = {
  success: false,
  error: false,
  renderAs: 'div'
}

const FormGroup = ({ children, ...props }) => {
  const {
    className,
    success,
    error,
    renderAs: Element,

    ...attributes
  } = props

  const classNames = classnames(
    'form-group',
    {
      'has-success': success,
      'has-error': error
    },
    className
  );

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

FormGroup.propTypes = propTypes
FormGroup.defaultProps = defaultProps

export default FormGroup

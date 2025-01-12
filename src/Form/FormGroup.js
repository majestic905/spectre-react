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

const FormGroup = ({ children, className, renderAs: Element = 'div', success = false, error = false, ...attributes }) => {
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

export default FormGroup

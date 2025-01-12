import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const ModalBody = ({ children, className, renderAs: Element = 'div', ...attributes }) => {
  const classNames = classnames('modal-body', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

ModalBody.propTypes = propTypes

export default ModalBody

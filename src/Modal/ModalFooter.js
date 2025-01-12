import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const ModalFooter = ({ children, className, renderAs: Element = 'div', ...attributes }) => {
  const classNames = classnames('modal-footer', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

ModalFooter.propTypes = propTypes


export default ModalFooter

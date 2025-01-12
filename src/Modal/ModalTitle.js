import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const ModalTitle = ({ children, className, renderAs: Element = 'div', ...attributes }) => {
  const classNames = classnames('modal-title', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

ModalTitle.propTypes = propTypes


export default ModalTitle

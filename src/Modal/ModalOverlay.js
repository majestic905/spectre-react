import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const ModalOverlay = ({ children, className, renderAs: Element = 'div', ...attributes }) => {
  const classNames = classnames('modal-overlay', className)

  return (
    <Element aria-label='Close' {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

ModalOverlay.propTypes = propTypes


export default ModalOverlay

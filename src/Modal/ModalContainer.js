import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  fullHeight: PropTypes.bool
}

const ModalContainer = ({ children, className, renderAs: Element = 'div', fullHeight = false, ...attributes }) => {
  const classNames = classnames('modal-container', { 'modal-fullheight': fullHeight }, className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

ModalContainer.propTypes = propTypes


export default ModalContainer

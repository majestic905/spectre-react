import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  fullHeight: PropTypes.bool
}

const defaultProps = {
  renderAs: 'div',
  fullHeight: false
}

const ModalContainer = ({ children, ...props }) => {
  const { className, renderAs: Element, fullHeight, ...attributes } = props

  const classNames = classnames('modal-container', { 'modal-fullheight': fullHeight }, className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

ModalContainer.propTypes = propTypes
ModalContainer.defaultProps = defaultProps

export default ModalContainer

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ModalContainer from './ModalContainer'
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'
import ModalOverlay from './ModalOverlay'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool
}

const defaultProps = {
  renderAs: 'div',
  active: false,
  small: false,
  large: false
}

const Modal = ({ children, ...props }) => {
  const {
    className,
    active,
    small,
    large,
    renderAs: Element,

    ...attributes
  } = props

  if (small && large) { throw new Error('Modal: you should provide either `small` or `large`, but not both.') }

  const classNames = classnames(
    'modal',
    {
      active,
      'modal-sm': small,
      'modal-lg': large
    },
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

Modal.propTypes = propTypes
Modal.defaultProps = defaultProps

Modal.Container = ModalContainer
Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter
Modal.Overlay = ModalOverlay

export default Modal

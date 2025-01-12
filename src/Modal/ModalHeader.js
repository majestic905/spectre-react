import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ModalTitle from './ModalTitle'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const ModalHeader = ({ children, className, renderAs: Element = 'div', ...attributes }) => {
  const classNames = classnames('modal-header', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

ModalHeader.propTypes = propTypes

ModalHeader.Title = ModalTitle

export default ModalHeader

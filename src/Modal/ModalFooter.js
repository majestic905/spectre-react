import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const defaultProps = {
  renderAs: 'div'
}

const ModalFooter = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('modal-footer', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

ModalFooter.propTypes = propTypes
ModalFooter.defaultProps = defaultProps

export default ModalFooter

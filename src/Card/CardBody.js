import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const CardBody = ({ children, className, renderAs: Element = 'div', ...attributes }) => {
  const classNames = classnames('card-body', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

CardBody.propTypes = propTypes

export default CardBody

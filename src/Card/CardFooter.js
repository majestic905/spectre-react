import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const CardFooter = ({ children, className, renderAs: Element = 'div', ...attributes }) => {
  const classNames = classnames('card-footer', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

CardFooter.propTypes = propTypes

export default CardFooter

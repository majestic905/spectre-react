import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const CardTitle = ({ children, className, renderAs: Element = 'div', ...attributes }) => {
  const classNames = classnames('card-title', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

CardTitle.propTypes = propTypes

export default CardTitle

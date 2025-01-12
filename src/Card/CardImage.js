import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const CardImage = ({ children, className, renderAs: Element = 'div', ...attributes }) => {
  const classNames = classnames('card-image', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

CardImage.propTypes = propTypes

export default CardImage

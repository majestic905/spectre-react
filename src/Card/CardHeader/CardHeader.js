import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import CardTitle from './CardTitle'
import CardSubtitle from './CardSubtitle'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const CardHeader = ({ children, className, renderAs: Element = 'div', ...attributes }) => {
  const classNames = classnames('card-header', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

CardHeader.propTypes = propTypes

CardHeader.Title = CardTitle
CardHeader.SubTitle = CardSubtitle

export default CardHeader

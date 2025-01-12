import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const TileSubtitle = ({ children, className, renderAs: Element = 'p', ...attributes }) => {
  const classNames = classnames('tile-subtitle', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

TileSubtitle.propTypes = propTypes

export default TileSubtitle

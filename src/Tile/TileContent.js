import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const TileContent = ({ children, className, renderAs: Element = 'div', ...attributes }) => {
  const classNames = classnames('tile-content', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

TileContent.propTypes = propTypes

export default TileContent

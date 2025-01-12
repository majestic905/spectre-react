import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const TileTitle = ({ children, className, renderAs: Element = 'p', ...attributes }) => {
  const classNames = classnames('tile-title', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

TileTitle.propTypes = propTypes

export default TileTitle

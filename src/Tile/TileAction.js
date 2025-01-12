import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const TileAction = ({ children, className, renderAs: Element = 'div', ...attributes }) => {
  const classNames = classnames('tile-action', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

TileAction.propTypes = propTypes

export default TileAction

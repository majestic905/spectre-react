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

const TileIcon = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('tile-icon', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

TileIcon.propTypes = propTypes
TileIcon.defaultProps = defaultProps

export default TileIcon

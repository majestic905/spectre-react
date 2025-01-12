import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import TileAction from './TileAction'
import TileContent from './TileContent'
import TileIcon from './TileIcon'
import TileSubtitle from './TileSubtitle'
import TileTitle from './TileTitle'

const propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const Tile = ({ children, className, renderAs: Element = 'div', centered = false, ...attributes }) => {
  const classNames = classnames('tile', { 'tile-centered': centered }, className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

Tile.propTypes = propTypes

Tile.Icon = TileIcon
Tile.Content = TileContent
Tile.Action = TileAction
Tile.Title = TileTitle
Tile.Subtitle = TileSubtitle

export default Tile

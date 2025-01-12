import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import TabMenuItem from './TabMenuItem'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  block: PropTypes.bool
}

const TabMenu = ({ children, className, renderAs: Element = 'ul', block = false, ...attributes }) => {
  const classNames = classnames(
    'tab',
    { 'tab-block': block },
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

TabMenu.propTypes = propTypes
TabMenu.Item = TabMenuItem

export default TabMenu

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool,
  action: PropTypes.bool
}

const TabMenuItem = ({ children, className, renderAs: Element = 'li', active = false, action = false, ...attributes }) => {
  const classNames = classnames(
    'tab-item',
    {
      active,
      'tab-action': action
    },
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

TabMenuItem.propTypes = propTypes

export default TabMenuItem

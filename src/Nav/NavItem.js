import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool
}

const NavItem = ({ children, className, renderAs: Element = 'li', active = false, ...attributes }) => {
  const classNames = classnames(
    'nav-item',
    { active },
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

NavItem.propTypes = propTypes


export default NavItem

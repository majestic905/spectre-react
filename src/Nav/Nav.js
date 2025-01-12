import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import NavItem from './NavItem'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const Nav = ({ children, className, renderAs: Element = 'ul', ...attributes }) => {
  const classNames = classnames('nav', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

Nav.propTypes = propTypes

Nav.Item = NavItem

export default Nav

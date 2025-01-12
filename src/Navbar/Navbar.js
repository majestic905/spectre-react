import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import NavbarSection from './NavbarSection'
import NavbarBrand from './NavbarBrand'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

export const Navbar = ({ children, className, renderAs: Element = 'nav', ...attributes }) => {
  const classNames = classnames('navbar', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

Navbar.propTypes = propTypes

Navbar.Section = NavbarSection
Navbar.Brand = NavbarBrand

export default Navbar

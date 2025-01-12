import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  href: PropTypes.string
}

export const NavbarBrand = ({ children, className, renderAs: Element = 'a', href = '#', ...attributes }) => {
  const classNames = classnames('navbar-brand', className)

  return (
    <Element href={href} {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

NavbarBrand.propTypes = propTypes

export default NavbarBrand

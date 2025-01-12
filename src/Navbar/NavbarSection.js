import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  center: PropTypes.bool
}

export const NavbarSection = ({ children, className, renderAs: Element = 'div', center = false, ...attributes }) => {
  const classNames = classnames(
    {
      'navbar-section': !center,
      'navbar-center': center
    },

    className
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

NavbarSection.propTypes = propTypes

export default NavbarSection

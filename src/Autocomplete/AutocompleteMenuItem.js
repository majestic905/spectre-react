import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const AutocompleteMenuItem = ({ children, className, renderAs: Element = 'li', ...attributes }) => {
  const classNames = classnames('menu-item', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

AutocompleteMenuItem.propTypes = propTypes

export default AutocompleteMenuItem

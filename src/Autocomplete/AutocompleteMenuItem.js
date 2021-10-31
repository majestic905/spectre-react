import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const defaultProps = {
  renderAs: 'li'
}

const AutocompleteMenuItem = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('menu-item', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

AutocompleteMenuItem.propTypes = propTypes
AutocompleteMenuItem.defaultProps = defaultProps

export default AutocompleteMenuItem

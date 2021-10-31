import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import AutocompleteMenuItem from './AutocompleteMenuItem'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const defaultProps = {
  renderAs: 'ul'
}

const AutocompleteMenu = ({ children, ...props }) => {
  const { className, renderAs: Element, ...attributes } = props
  const classNames = classnames('menu', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

AutocompleteMenu.Item = AutocompleteMenuItem

AutocompleteMenu.propTypes = propTypes
AutocompleteMenu.defaultProps = defaultProps

export default AutocompleteMenu

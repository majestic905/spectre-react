import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import AutocompleteMenuItem from './AutocompleteMenuItem'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const AutocompleteMenu = ({ children, className, renderAs: Element = 'ul', ...attributes }) => {
  const classNames = classnames('menu', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

AutocompleteMenu.Item = AutocompleteMenuItem

AutocompleteMenu.propTypes = propTypes

export default AutocompleteMenu

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import AutocompleteInput from './AutocompleteInput'
import AutocompleteMenu from './AutocompleteMenu'

const propTypes = {
  oneline: PropTypes.bool,
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const Autocomplete = ({ children, className, renderAs: Element = 'div', oneline = false, ...attributes }) => {
  const classNames = classnames(
    'form-autocomplete',
    { 'autocomplete-oneline': oneline },
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

Autocomplete.propTypes = propTypes

Autocomplete.Input = AutocompleteInput
Autocomplete.Menu = AutocompleteMenu

export default Autocomplete

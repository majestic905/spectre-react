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

const defaultProps = {
  oneline: false,
  renderAs: 'div'
}

const Autocomplete = ({ children, ...props }) => {
  const {
    oneline,
    className,
    renderAs: Element,

    ...attributes
  } = props

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
Autocomplete.defaultProps = defaultProps

Autocomplete.Input = AutocompleteInput
Autocomplete.Menu = AutocompleteMenu

export default Autocomplete

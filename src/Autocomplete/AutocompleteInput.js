import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  focused: PropTypes.bool,
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const AutocompleteInput = ({ children, className, renderAs: Element = 'div', focused = false, ...attributes }) => {
  const classNames = classnames(
    'form-autocomplete-input',
    'form-input',
    { 'is-focused': focused },
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

AutocompleteInput.propTypes = propTypes

export default AutocompleteInput

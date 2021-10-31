import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  focused: PropTypes.bool,
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const defaultProps = {
  focused: false,
  renderAs: 'div'
}

const AutocompleteInput = ({ children, ...props }) => {
  const {
    focused,
    className,
    renderAs: Element,

    ...attributes
  } = props

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
AutocompleteInput.defaultProps = defaultProps

export default AutocompleteInput

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const Chip = ({ children, className, renderAs: Element = 'span', ...attributes }) => {
  const classNames = classnames('chip', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

Chip.propTypes = propTypes

export default Chip

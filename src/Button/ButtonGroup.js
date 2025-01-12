import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  block: PropTypes.bool
}

const ButtonGroup = ({ children, className, renderAs: Element = 'div', block = false, ...attributes }) => {
  const classNames = classnames(
    'btn-group',
    { 'btn-group-block': block },
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

ButtonGroup.propTypes = propTypes

export default ButtonGroup

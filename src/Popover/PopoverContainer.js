import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const PopoverContainer = ({ children, className, renderAs: Element = 'div', ...attributes }) => {
  const classNames = classnames('popover-container', className)

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

PopoverContainer.propTypes = propTypes

export default PopoverContainer

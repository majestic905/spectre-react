import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import PopoverContainer from './PopoverContainer'

const positions = ['right', 'bottom', 'left']

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  position: PropTypes.oneOf(positions)
}

const Popover = ({ children, className, renderAs: Element = 'div', position, ...attributes }) => {
  const classNames = classnames(
    'popover',
    {
      [`popover-${position}`]: position
    },
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

Popover.propTypes = propTypes

Popover.Container = PopoverContainer

export default Popover

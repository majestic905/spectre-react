import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import FigureCaption from './FigureCaption'

// avatar sizes
const sizes = ['xl', 'lg', 'sm', 'xs']

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  avatar: PropTypes.bool,
  initials: PropTypes.string,
  size: PropTypes.oneOf(sizes)
}

const Figure = ({ children, className, renderAs: Element = 'figure', avatar = false, initials, size, ...attributes }) => {
  const classNames = classnames(
    'figure',
    {
      avatar: avatar,
      [`avatar-${size}`]: avatar && size
    },
    className
  )

  return (
    <Element {...attributes} data-initial={initials} className={classNames}>
      {children}
    </Element>
  )
}

Figure.propTypes = propTypes

Figure.Caption = FigureCaption

export default Figure

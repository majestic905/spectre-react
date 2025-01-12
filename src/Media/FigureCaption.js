import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  align: PropTypes.oneOf(['right', 'left', 'center'])
}

const FigureCaption = ({ children, className, renderAs: Element = 'figcaption', align, ...attributes }) => {
  const classNames = classnames(
    'figure-caption',
    {
      [`text-${align}`]: align
    },
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

FigureCaption.propTypes = propTypes


export default FigureCaption

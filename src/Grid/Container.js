import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

const Container = ({ children, className, renderAs: Element = 'div', size, ...attributes }) => {
  const classNames = classnames(
    'container',
    className,
    {
      [`grid-${size}`]: size
    }
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

Container.propTypes = propTypes


export default Container

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gapless: PropTypes.bool,
  oneline: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

const Row = ({ children, className, renderAs: Element = 'div', gapless = false, oneline = false, ...attributes }) => {
  const classNames = classnames(
    'columns',
    {
      'col-gapless': gapless,
      'col-oneline': oneline
    },

    className
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

Row.propTypes = propTypes


export default Row

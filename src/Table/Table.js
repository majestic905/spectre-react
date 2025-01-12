import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  scroll: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

const Table = ({ children, className, renderAs: Element = 'table', striped = false, hover = false, scroll = false, ...attributes }) => {
  const classNames = classnames(
    'table',
    className,
    {
      'table-striped': striped,
      'table-hover': hover,
      'table-scroll': scroll
    }
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

Table.propTypes = propTypes

export default Table

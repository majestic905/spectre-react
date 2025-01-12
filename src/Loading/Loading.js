import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  className: PropTypes.string,
  large: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

const Loading = ({ className, renderAs: Element = 'div', large = false, ...attributes }) => {
  const classNames = classnames(
    'loading',
    { 'loading-lg': large },
    className
  )

  return (
    <Element {...attributes} className={classNames} />
  )
}

Loading.propTypes = propTypes

export default Loading

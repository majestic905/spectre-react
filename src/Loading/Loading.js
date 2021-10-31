import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  className: PropTypes.string,
  large: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

const defaultProps = {
  large: false,
  renderAs: 'div'
}

const Loading = ({ className, large, renderAs: Element, ...attributes }) => {
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
Loading.defaultProps = defaultProps

export default Loading

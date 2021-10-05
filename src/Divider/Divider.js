import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  className: PropTypes.string,
  vertical: PropTypes.bool,
  text: PropTypes.string,
  textPosition: PropTypes.string
}

const defaultProps = {
  vertical: false,
  text: undefined,
  textPosition: 'center'
}

const Divider = (props) => {
  const {
    className,
    vertical,
    text,
    textPosition,

    ...attributes
  } = props

  const classNames = classnames(
    {
      divider: !vertical,
      'divider-vert': vertical,
      [`text-${textPosition}`]: !!text && !vertical
    },
    className
  )

  return (
    <div {...attributes} data-content={text} className={classNames} />
  )
}

Divider.propTypes = propTypes
Divider.defaultProps = defaultProps

export default Divider

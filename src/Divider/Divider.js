import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  className: PropTypes.string,
  vertical: PropTypes.bool,
  text: PropTypes.string,
  textPosition: PropTypes.oneOf(['left', 'center', 'right']),
}

const Divider = ({ className, vertical = false, text, textPosition = 'center', ...attributes}) => {
  const classNames = classnames(
    {
      divider: !vertical,
      'divider-vert': vertical,
      [`text-${textPosition}`]: !!text && !!textPosition && !vertical
    },
    className
  )

  return (
    <div {...attributes} data-content={text} className={classNames} />
  )
}

Divider.propTypes = propTypes

export default Divider

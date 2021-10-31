import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  className: PropTypes.string,
  bg: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

const defaultProps = {
  renderAs: 'span'
}

const TimelineIcon = ({ children, ...props }) => {
  const {
    bg,
    className,
    renderAs: Element,

    ...attributes
  } = props

  const classNames = classnames(
    'timeline-icon',
    {
      'icon-lg': children,
      [`bg-${bg}`]: children && bg
    },
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

TimelineIcon.propTypes = propTypes
TimelineIcon.defaultProps = defaultProps

export default TimelineIcon

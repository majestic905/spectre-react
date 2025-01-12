import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import TimelineIcon from './TimelineIcon'

const propTypes = {
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

const TimelineLeft = ({ children, renderAs: Element = 'div', ...props }) => {
  const {
    className,

    ...attributes
  } = props

  const classNames = classnames(
    'timeline-left',
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

TimelineLeft.propTypes = propTypes

TimelineLeft.Icon = TimelineIcon

export default TimelineLeft

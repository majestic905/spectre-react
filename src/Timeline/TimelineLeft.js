import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import TimelineIcon from './TimelineIcon'

const propTypes = {
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

const defaultProps = {
  renderAs: 'div'
}

const TimelineLeft = ({ children, ...props }) => {
  const {
    className,
    renderAs: Element,

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
TimelineLeft.defaultProps = defaultProps

TimelineLeft.Icon = TimelineIcon

export default TimelineLeft

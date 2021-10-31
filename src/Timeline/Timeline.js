import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import TimelineItem from './TimelineItem'

const propTypes = {
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

const defaultProps = {
  renderAs: 'div'
}

const Timeline = ({ children, ...props }) => {
  const {
    className,
    renderAs: Element,

    ...attributes
  } = props

  const classNames = classnames(
    'timeline',
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

Timeline.propTypes = propTypes
Timeline.defaultProps = defaultProps

Timeline.Item = TimelineItem

export default Timeline

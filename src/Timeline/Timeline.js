import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import TimelineItem from './TimelineItem'

const propTypes = {
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

const Timeline = ({ children, className, renderAs: Element = 'div', ...attributes }) => {
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

Timeline.Item = TimelineItem

export default Timeline

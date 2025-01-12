import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import TimelineContent from './TimelineContent'
import TimelineLeft from './TimelineLeft'

const propTypes = {
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  final: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
}

const TimelineItem = ({ children, className, renderAs: Element = 'div', final = false, ...attributes }) => {
  const classNames = cx(
    'timeline-item',
    {
      'timeline-item-final': final
    },
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

TimelineItem.propTypes = propTypes

TimelineItem.Left = TimelineLeft
TimelineItem.Content = TimelineContent

export default TimelineItem

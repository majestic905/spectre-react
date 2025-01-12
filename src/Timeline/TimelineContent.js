import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

const TimelineContent = ({ children, className, renderAs: Element = 'div', ...attributes }) => {
  const classNames = classnames(
    'timeline-content',
    className
  )

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

TimelineContent.propTypes = propTypes

export default TimelineContent

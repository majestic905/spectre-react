import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

const defaultProps = {
  renderAs: 'div'
}

const TimelineContent = ({ children, ...props }) => {
  const {
    className,
    renderAs: Element,

    ...attributes
  } = props

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
TimelineContent.defaultProps = defaultProps

export default TimelineContent

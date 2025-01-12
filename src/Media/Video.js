import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  responsive: PropTypes.bool,
  ratio: PropTypes.oneOf(['4:3', '1:1', '16:9'])
}

const Video = ({ children, className, renderAs: Element = 'video', responsive = false, ratio, ...attributes }) => {
  const classNames = classnames(
    {
      'video-responsive': responsive || ratio,
      'video-responsive-1-1': ratio === '1:1',
      'video-responsive-4-3': ratio === '4:3'
    },
    className
  ) || null

  return (
    <Element {...attributes} className={classNames}>
      {children}
    </Element>
  )
}

Video.propTypes = propTypes


export default Video

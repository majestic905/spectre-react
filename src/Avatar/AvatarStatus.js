import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  online: PropTypes.bool,
  busy: PropTypes.bool,
  away: PropTypes.bool
}

const AvatarStatus = ({ children, className, renderAs: Element = 'i', online = false, busy = false, away = false, ...attributes }) => {
  const classNames = classnames(
    'avatar-presence',
    {
      online,
      busy,
      away
    },
    className
  )

  return (
    <Element {...attributes} className={classNames} />
  )
}

AvatarStatus.propTypes = propTypes

export default AvatarStatus

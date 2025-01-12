import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ButtonGroup from './ButtonGroup'

const propTypes = {
  action: PropTypes.bool,
  active: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.node,
  circle: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  large: PropTypes.bool,
  link: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  small: PropTypes.bool,
  success: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

const Button = ({ children, className, renderAs: Element = 'button', ...props }) => {
  const {
    onClick,

    // styles
    primary = false,
    link = false,

    // colors
    success = false,
    error = false,

    // sizes
    block = false,
    small = false,
    large = false,
    action = false,
    circle = false,

    // states
    active = false,
    loading = false,
    disabled = false,

    ...attributes
  } = props

  const classNames = classnames(
    'btn',

    {
      'btn-primary': primary,
      'btn-link': link,
      'btn-success': success,
      'btn-error': error,
      'btn-block': block,
      'btn-sm': small,
      'btn-lg': large,
      'btn-action': action || circle,
      's-circle': circle,
      active: active,
      loading: loading,
      disabled: disabled
    },

    className
  )

  if (attributes.href)
    Element = 'a'

  const type = (Element === 'button' && onClick) ? 'button' : undefined

  return (
    <Element
      type={type}
      {...attributes}
      onClick={disabled ? undefined : onClick}
      className={classNames}
    >
      {children}
    </Element>
  )
}

Button.propTypes = propTypes

Button.Group = ButtonGroup

export default Button

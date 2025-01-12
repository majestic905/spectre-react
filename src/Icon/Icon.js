import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  loading: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['2x', '3x', '4x']),
  formIcon: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

const Icon = ({ children, className, renderAs: Element = 'i', ...props }) => {
  const { formIcon = false, loading = false, icon, size, ...attributes } = props;

  const classNames = classnames(
    {
      icon: !!icon,
      [`icon-${icon}`]: !!icon,
      [`icon-${size}`]: size,
      'form-icon': formIcon,
      loading: loading
    },
    className
  )

  return (
    <Element {...attributes} className={classNames} />
  )
}

Icon.propTypes = propTypes

export default Icon

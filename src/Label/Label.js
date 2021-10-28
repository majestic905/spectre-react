import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const colors = ['primary', 'secondary', 'success', 'warning', 'error']

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  rounded: PropTypes.bool,
  form: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  htmlFor: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

const defaultProps = {
  renderAs: 'span',
  rounded: false,
  form: false,
  small: false,
  large: false
}

/**
 * @example
 * <Label form>...</Label>
 * @example
 * <Label form large>...</Label>
 * @example
 * <Label primary>...</Label>
 * @example
 * <Label primary rounded>...</Label>
 */
const Label = ({ children, ...props }) => {
  const {
    color,
    rounded,
    small,
    large,
    className,
    renderAs,
    htmlFor,
    form,

    ...attributes
  } = props

  const classNames = classnames(
    {
      label: !form,
      [`label-${color}`]: !form && color,
      'label-rounded': !form && rounded,

      'form-label': form,
      'label-sm': form && small,
      'label-lg': form && large
    },

    className
  )

  let Element = renderAs

  if (htmlFor && Element === 'span') {
    Element = 'label'
  }

  return (
    <Element
      {...attributes}
      className={classNames}
      htmlFor={htmlFor}
    >
      {children}
    </Element>
  )
}

Label.propTypes = propTypes
Label.defaultProps = defaultProps

export default Label

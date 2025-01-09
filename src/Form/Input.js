import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf([
    'text', 'email', 'tel', 'password', 'number', 'search',
    'color', 'file', 'date'
  ]),
  placeholder: PropTypes.string,
  small: PropTypes.bool,
  large: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
    loading: PropTypes.bool,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  iconWrapper: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

const defaultProps = {
  type: 'text',
  large: false,
  small: false,
  error: false,
  success: false,
    loading: false,
  iconLeft: false,
  iconRight: false,
  renderAs: 'input',
  iconWrapper: 'div'
}

const Input = React.forwardRef(({ children, ...props }, ref) => {
  const {
    className,
    name,
    type,
    placeholder,
    small,
    large,
    error,
    success,
      loading,
    iconRight,
    iconLeft,
    renderAs: Element,
    iconWrapper: Wrapper,

    ...attributes
  } = props

  const classNames = classnames(
    'form-input',

    {
      'input-sm': small,
      'input-lg': large,
      'is-error': error,
      'is-success': success
    },

    className
  )

  const input = (
    <Element
      {...attributes}
      ref={ref}
      name={name}
      type={type}
      placeholder={placeholder}
      className={classNames}
    />
  )

  let iconPosition;
  if (iconLeft)
      iconPosition = 'left';
  else if (iconRight)
      iconPosition = 'right';

  if (loading) {
      if (!iconPosition)
          iconPosition = 'right';
      children = <i className="form-icon loading"></i>
  }

  return (
    iconPosition
      ? (
        <Wrapper className={`has-icon-${iconPosition}`}>
          {input}
          {children}
        </Wrapper>
        )
      : input
  )
});

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input

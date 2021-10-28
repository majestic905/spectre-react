import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  switch: PropTypes.bool,
  inline: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  error: PropTypes.bool,
  indeterminate: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  iconWrapper: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

const defaultProps = {
  type: 'checkbox',
  switch: false,
  inline: false,
  large: false,
  small: false,
  error: false,
  renderAs: 'input'
}

class Checkbox extends Component {
  constructor (props) {
    super(props)
    this.inputRef = React.createRef()
  }

  componentDidMount () {
    this.inputRef.current.indeterminate = this.props.indeterminate
  }

  componentDidUpdate (prevProps) {
    if (prevProps.indeterminate !== this.props.indeterminate) {
      this.inputRef.current.indeterminate = this.props.indeterminate
    }
  }

  render () {
    const {
      className,
      name,
      children,
      renderAs: Element,

      switch: isSwitch,
      inline,
      small,
      large,
      error,

      ...attributes
    } = this.props

    const classNames = classnames(
      {
        'form-checkbox': !isSwitch,
        'form-switch': isSwitch,
        'form-inline': inline,
        'input-sm': small,
        'input-lg': large,
        'is-error': error
      },
      className
    )

    return (
      <label className={classNames}>
        <Element
          {...attributes}
          name={name}
          type='checkbox'
          ref={this.inputRef}
        />
        <i className='form-icon' />
        {children}
      </label>
    )
  }
}

Checkbox.propTypes = propTypes
Checkbox.defaultProps = defaultProps

export default Checkbox

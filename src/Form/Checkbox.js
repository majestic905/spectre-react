import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  switch: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  indeterminate: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  iconWrapper: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

const defaultProps = {
  type: 'checkbox',
  label: '',
  switch: false,
  large: false,
  small: false,
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
      label,
      switch: isSwitch,
      type,
      small,
      large,
      children,
      renderAs: Element,

      ...attributes
    } = this.props

    const classNames = classnames(
      {
        'form-checkbox': !isSwitch,
        'form-switch': isSwitch,
        'input-sm': small,
        'input-lg': large
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
        {label}
      </label>
    )
  }
}

Checkbox.propTypes = propTypes
Checkbox.defaultProps = defaultProps

export default Checkbox

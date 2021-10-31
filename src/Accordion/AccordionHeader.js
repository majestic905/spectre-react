import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const types = ['checkbox', 'radio', 'summary']

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(types),
  inputProps: PropTypes.shape({
    id: PropTypes.string.isRequired
  })
}

const defaultProps = {
  type: 'summary'
}

const AccordionHeader = ({ children, ...props }) => {
  const {
    className,
    type,
    inputProps,
    renderAs: Element,

    ...attributes
  } = props

  const classNames = classnames('accordion-header', 'c-hand', className)

  if (type !== 'summary' && (!inputProps || !inputProps.id)) {
    throw new Error("Accordion: you must provide `id` inside `inputProps`")
  }

  if (type === 'summary')
    return (
      <summary {...attributes} className={classNames}>
        {children}
      </summary>
    )
  else
    // has to use Fragment due to the way Spectre CSS works
    return (
      <React.Fragment>
        <input
          type={type}
          hidden
          {...inputProps}
        />
        <label
          {...attributes}
          className={classNames}
          htmlFor={inputProps.id}
        >
          {children}
        </label>
      </React.Fragment>
    )
}

AccordionHeader.propTypes = propTypes
AccordionHeader.defaultProps = defaultProps

export default AccordionHeader

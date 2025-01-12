import React from 'react'
import PropTypes from 'prop-types'

import Label from '../Label'

const propTypes = {
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.node,
  label: PropTypes.string,
  className: PropTypes.string
}

const Heading = ({ children, renderAs: Element = 'h1', label, ...attributes }) => {
  return (
    <Element {...attributes}>
      {children}{label && <Label renderAs='small'> {label}</Label>}
    </Element>
  )
}

Heading.propTypes = propTypes

export default Heading

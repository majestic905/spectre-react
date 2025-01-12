import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  responsive: PropTypes.bool,
  contain: PropTypes.bool,
  cover: PropTypes.bool
}

const Image = ({ children, className, renderAs: Element = 'img', responsive = false, contain = false, cover = false, ...attributes }) => {
  const classNames = classnames(
    {
      'img-responsive': responsive,
      'img-fit-contain': contain,
      'img-fit-cover': cover
    },
    className
  ) || null

  return (
    <Element {...attributes} className={classNames} />
  )
}

Image.propTypes = propTypes


export default Image

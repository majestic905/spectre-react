import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  lang: PropTypes.string,
  multi: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

const Code = ({ children, className, renderAs: Element = 'code', multi = false, lang, ...attributes }) => {
  const classNames = classnames(
    {
      code: multi
    },
    className
  )

  if (multi && Element === 'code') {
    Element = 'pre'
  }

  return multi
    ? (
      <Element {...attributes} className={classNames}>
        <code lang={lang}>{children}</code>
      </Element>
      )
    : (
      <Element {...attributes} className={classNames} lang={lang}>
        {children}
      </Element>
      )
}

Code.propTypes = propTypes

export default Code

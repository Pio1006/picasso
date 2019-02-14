import React from 'react'
import PropTypes from 'prop-types'

const Spacer = ({ children, top, bottom, left, right, inline, className }) => {
  return (
    <div
      className={className}
      style={{
        marginTop: top + 'em',
        marginBottom: bottom + 'em',
        marginLeft: left + 'em',
        marginRight: right + 'em',
        display: inline ? 'inline-block' : null
      }}
    >
      {children}
    </div>
  )
}

Spacer.propTypes = {
  bottom: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  inline: PropTypes.bool,
  left: PropTypes.number,
  right: PropTypes.number,
  top: PropTypes.number
}

Spacer.defaultProps = {
  bottom: 0,
  children: null,
  className: null,
  inline: false,
  left: 0,
  right: 0,
  top: 0
}

export default Spacer

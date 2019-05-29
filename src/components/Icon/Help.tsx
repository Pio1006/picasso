import React from 'react'
import cx from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import { StandardProps } from '../Picasso'
import styles from './styles'
interface Props extends StandardProps {
  size?: number
  color?: string
}

const SvgHelp = (props: Props) => {
  const { classes, className, style, size, color } = props
  const svgStyle = {
    fontSize: size && `${size}rem`,
    ...style
  }

  return (
    <svg
      viewBox='0 0 16 16'
      className={cx(classes.root, className)}
      style={svgStyle}
      color={color}
    >
      <path d='M3.416 13.29A6.973 6.973 0 0 0 8 15a6.973 6.973 0 0 0 4.584-1.71l-1.42-1.419A4.98 4.98 0 0 1 8 13a4.98 4.98 0 0 1-3.164-1.129l-1.42 1.42zm-.707-.706l1.42-1.42A4.98 4.98 0 0 1 3 8c0-1.2.423-2.302 1.129-3.164l-1.42-1.42A6.973 6.973 0 0 0 1 8c0 1.753.644 3.356 1.71 4.584zm10.582 0A6.973 6.973 0 0 0 15 8a6.973 6.973 0 0 0-1.71-4.584l-1.419 1.42A4.98 4.98 0 0 1 13 8a4.98 4.98 0 0 1-1.129 3.164l1.42 1.42zm-.707-9.875A6.973 6.973 0 0 0 8 1a6.973 6.973 0 0 0-4.584 1.71l1.42 1.419A4.98 4.98 0 0 1 8 3c1.2 0 2.302.423 3.164 1.129l1.42-1.42zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-4a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' />
    </svg>
  )
}

SvgHelp.displayName = 'SvgHelp'
export default withStyles(styles)(SvgHelp)

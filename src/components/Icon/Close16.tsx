import React from 'react'
import cx from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import { StandardProps } from '../Picasso'
import styles from './styles'
const BASE_SIZE = 16

type ScaleType = 1 | 2 | 3 | 4
export interface Props extends StandardProps {
  size?: number
  scale?: ScaleType
  color?: string
  base?: number
}

const SvgClose16 = (props: Props) => {
  const { classes, className, style = {}, color, scale, size, base } = props

  if (size) {
    const name = 'SvgClose16'

    window.console.warn(
      `${name}: size' prop will be removed in the next major release of Picasso. Please use 'scale' to maintain pixel perfect icons`
    )
  }

  const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1)
  const svgStyle = {
    minWidth: `${scaledSize}px`,
    minHeight: `${scaledSize}px`,
    ...style
  }

  return (
    <svg
      viewBox='0 0 16 16'
      className={cx(classes.root, className)}
      style={svgStyle}
      color={color}
    >
      <defs>
        <path
          d='M8.707 8l5.5 5.5-.707.707-5.5-5.5-5.5 5.5-.707-.707 5.5-5.5-5.5-5.5.707-.707 5.5 5.5 5.5-5.5.707.707-5.5 5.5z'
          id='close16_svg__a'
        />
      </defs>
      <g fillRule='evenodd'>
        <mask id='close16_svg__b'>
          <use xlinkHref='#close16_svg__a' />
        </mask>
        <use fillRule='nonzero' xlinkHref='#close16_svg__a' />
        <g mask='url(#close16_svg__b)'>
          <path d='M0 0h16v16H0z' />
        </g>
      </g>
    </svg>
  )
}

SvgClose16.displayName = 'SvgClose16'
export default withStyles(styles)(SvgClose16)

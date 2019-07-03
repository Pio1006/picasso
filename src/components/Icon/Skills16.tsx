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

const SvgSkills16 = (props: Props) => {
  const { classes, className, style = {}, color, scale, size, base } = props

  if (size) {
    const name = 'SvgSkills16'

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
          d='M3.5 5.793l.646-.647.708.708L3.5 7.207.793 4.5 4.5.793l2.354 2.353-.708.708L4.5 2.207 2.207 4.5 3.5 5.793zm8 8l2.293-2.293-1.647-1.646.708-.708 2.353 2.354-3.707 3.707L8.793 12.5l1.353-1.354.708.708-.647.646 1.293 1.293zm-2-9.586l-7.5 7.5V14h2.293l7.5-7.5L9.5 4.207zm.707-.707L12.5 5.793 13.793 4.5 11.5 2.207 10.207 3.5zM1 11.293L11.5.793 15.207 4.5 4.707 15H1v-3.707z'
          id='skills16_svg__a'
        />
      </defs>
      <g fillRule='evenodd'>
        <mask id='skills16_svg__b'>
          <use xlinkHref='#skills16_svg__a' />
        </mask>
        <use fillRule='nonzero' xlinkHref='#skills16_svg__a' />
        <g mask='url(#skills16_svg__b)'>
          <path d='M0 0h16v16H0z' />
        </g>
      </g>
    </svg>
  )
}

SvgSkills16.displayName = 'SvgSkills16'
export default withStyles(styles)(SvgSkills16)
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

const SvgEducation16 = (props: Props) => {
  const { classes, className, style = {}, color, scale, size, base } = props

  if (size) {
    const name = 'SvgEducation16'

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
          d='M10.996 12.794L13 16H8l1.996-3.194V6.783L7.314 5.169l.515-.857 3.167 1.905v6.577zM12 11.572v-1.116l1-.496V6.058l-1 .5V5.44l1.883-.941-5.866-2.94-5.898 2.94L8 7.442l1-.5v1.118l-1 .5-5-2.5v3.9l5 2.48 1-.496v1.117l-1 .495-6-2.975V5.558l-2.12-1.06L8.019.441l8.099 4.058L14 5.56v5.021l-2 .992zM9.804 15h1.392l-.696-1.113L9.804 15z'
          id='education16_svg__a'
        />
      </defs>
      <g fillRule='evenodd'>
        <mask id='education16_svg__b'>
          <use xlinkHref='#education16_svg__a' />
        </mask>
        <use fillRule='nonzero' xlinkHref='#education16_svg__a' />
        <g mask='url(#education16_svg__b)'>
          <path d='M0 0h16v16H0z' />
        </g>
      </g>
    </svg>
  )
}

SvgEducation16.displayName = 'SvgEducation16'
export default withStyles(styles)(SvgEducation16)

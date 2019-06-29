import React from 'react'
import cx from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import { StandardProps } from '../Picasso'
import styles from './styles'
const BASE_SIZE = 24

type ScaleType = 1 | 2 | 3 | 4
export interface Props extends StandardProps {
  size?: number
  scale?: ScaleType
  color?: string
  base?: number
}

const SvgCalendar24 = (props: Props) => {
  const { classes, className, style = {}, color, scale, size, base } = props

  if (size) {
    const name = 'SvgCalendar24'

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
      viewBox='0 0 24 24'
      className={cx(classes.root, className)}
      style={svgStyle}
      color={color}
    >
      <defs>
        <path
          d='M5 4V2h1v2h12V2h1v2h5v18H0V4h5zm0 1H1v4h22V5h-4v2h-1V5H6v2H5V5zm18 5H1v11h22V10z'
          id='calendar24_svg__a'
        />
      </defs>
      <g fillRule='evenodd'>
        <mask id='calendar24_svg__b'>
          <use xlinkHref='#calendar24_svg__a' />
        </mask>
        <use fillRule='nonzero' xlinkHref='#calendar24_svg__a' />
        <g mask='url(#calendar24_svg__b)'>
          <path d='M0 0h24v24H0z' />
        </g>
      </g>
    </svg>
  )
}

SvgCalendar24.displayName = 'SvgCalendar24'
export default withStyles(styles)(SvgCalendar24)

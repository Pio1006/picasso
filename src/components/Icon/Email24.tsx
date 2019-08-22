import React, { forwardRef, Ref } from 'react'
import cx from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import { StandardProps } from '../Picasso'
import styles from './styles'
const BASE_SIZE = 24

type ScaleType = 1 | 2 | 3 | 4
export interface Props extends StandardProps {
  scale?: ScaleType
  color?: string
  base?: number
}
const SvgEmail24 = forwardRef(function SvgEmail24(
  props: Props,
  ref: Ref<SVGSVGElement>
) {
  const { classes, className, style = {}, color, scale, base } = props
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
      ref={ref}
    >
      <defs>
        <path
          d='M1.721 4L12 13.342 22.279 4H1.72zM23 4.693l-11 9.966L1 4.693V20h22V4.693zM0 3h24v18H0V3z'
          id='email24_svg__a'
        />
      </defs>
      <g fillRule='evenodd'>
        <mask id='email24_svg__b'>
          <use xlinkHref='#email24_svg__a' />
        </mask>
        <use fillRule='nonzero' xlinkHref='#email24_svg__a' />
        <g mask='url(#email24_svg__b)'>
          <path d='M0 0h24v24H0z' />
        </g>
      </g>
    </svg>
  )
})

SvgEmail24.displayName = 'SvgEmail24'
export default withStyles(styles)(SvgEmail24)

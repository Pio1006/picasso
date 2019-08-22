import React, { forwardRef, Ref } from 'react'
import cx from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import { StandardProps } from '../Picasso'
import styles from './styles'
const BASE_SIZE = 16

type ScaleType = 1 | 2 | 3 | 4
export interface Props extends StandardProps {
  scale?: ScaleType
  color?: string
  base?: number
}
const SvgCode16 = forwardRef(function SvgCode16(
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
      viewBox='0 0 16 16'
      className={cx(classes.root, className)}
      style={svgStyle}
      color={color}
      ref={ref}
    >
      <defs>
        <path
          d='M1.63 8l3.074 4.103-.8.6L.38 8l3.525-4.7.8.6L1.63 8zm9.674 4.103L14.38 8l-3.075-4.1.8-.6L15.63 8l-3.524 4.702-.8-.6zM6.874 15.1l-.974-.225L9.125.9l.975.225L6.875 15.1z'
          id='code16_svg__a'
        />
      </defs>
      <g fillRule='evenodd'>
        <mask id='code16_svg__b'>
          <use xlinkHref='#code16_svg__a' />
        </mask>
        <use fillRule='nonzero' xlinkHref='#code16_svg__a' />
        <g mask='url(#code16_svg__b)'>
          <path d='M0 0h16v16H0z' />
        </g>
      </g>
    </svg>
  )
})

SvgCode16.displayName = 'SvgCode16'
export default withStyles(styles)(SvgCode16)

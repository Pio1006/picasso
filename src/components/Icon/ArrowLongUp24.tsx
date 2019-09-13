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
const SvgArrowLongUp24 = forwardRef(function SvgArrowLongUp24(
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
          d='M11.5 2.793L17.207 8.5l-.707.707-4.5-4.5V21h-1V4.707l-4.5 4.5-.707-.707L11.5 2.793z'
          id='arrowLongUp24_svg__a'
        />
      </defs>
      <g fillRule='evenodd'>
        <mask id='arrowLongUp24_svg__b'>
          <use xlinkHref='#arrowLongUp24_svg__a' />
        </mask>
        <use fillRule='nonzero' xlinkHref='#arrowLongUp24_svg__a' />
        <g mask='url(#arrowLongUp24_svg__b)'>
          <path d='M0 0h24v24H0z' />
        </g>
      </g>
    </svg>
  )
})

SvgArrowLongUp24.displayName = 'SvgArrowLongUp24'
export default withStyles(styles)(SvgArrowLongUp24)
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
const SvgRepresentatives24 = forwardRef(function SvgRepresentatives24(
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
          d='M3 0h18v24l-9-6.007L3 24V0zm1 1v21.13l8-5.34 8 5.34V1H4z'
          id='representatives24_svg__a'
        />
      </defs>
      <g fillRule='evenodd'>
        <mask id='representatives24_svg__b'>
          <use xlinkHref='#representatives24_svg__a' />
        </mask>
        <use fillRule='nonzero' xlinkHref='#representatives24_svg__a' />
        <g mask='url(#representatives24_svg__b)'>
          <path d='M0 0h24v24H0z' />
        </g>
      </g>
    </svg>
  )
})

SvgRepresentatives24.displayName = 'SvgRepresentatives24'
export default withStyles(styles)(SvgRepresentatives24)

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
const SvgTerms16 = forwardRef(function SvgTerms16(
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
          d='M1 0h14v16H1V0zm1 1v14h12V1H2zm2 2h8v1H4V3zm0 2h8v1H4V5zm0 2h5v1H4V7zm0 5h3v1H4v-1z'
          id='terms16_svg__a'
        />
      </defs>
      <g fillRule='evenodd'>
        <mask id='terms16_svg__b'>
          <use xlinkHref='#terms16_svg__a' />
        </mask>
        <use fillRule='nonzero' xlinkHref='#terms16_svg__a' />
        <g mask='url(#terms16_svg__b)'>
          <path d='M0 0h16v16H0z' />
        </g>
      </g>
    </svg>
  )
})

SvgTerms16.displayName = 'SvgTerms16'
export default withStyles(styles)(SvgTerms16)

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
const SvgUiGuidelines24 = forwardRef(function SvgUiGuidelines24(
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
          d='M23 2h-9v20h9V2zm1 0v21H13V1h11v1zM0 4h10v1H0V4zm0 5h10v1H0V9zm0 5h10v1H0v-1zm0 5h10v1H0v-1z'
          id='uiGuidelines24_svg__a'
        />
      </defs>
      <g fillRule='evenodd'>
        <mask id='uiGuidelines24_svg__b'>
          <use xlinkHref='#uiGuidelines24_svg__a' />
        </mask>
        <use xlinkHref='#uiGuidelines24_svg__a' />
        <g mask='url(#uiGuidelines24_svg__b)'>
          <path d='M0 0h24v24H0z' />
        </g>
      </g>
    </svg>
  )
})

SvgUiGuidelines24.displayName = 'SvgUiGuidelines24'
export default withStyles(styles)(SvgUiGuidelines24)

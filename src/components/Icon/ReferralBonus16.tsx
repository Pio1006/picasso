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

const SvgReferralBonus16 = (props: Props) => {
  const { classes, className, style = {}, color, scale, size, base } = props

  if (size) {
    const name = 'SvgReferralBonus16'

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
          d='M9 14.5H7V16H6v-1.606c-1.472-.302-2.75-1.232-3.443-2.563l-.231-.443.886-.462.231.443c.52.998 1.46 1.717 2.557 1.999v-4.87a3.688 3.688 0 0 1-2.431-1.016A3.44 3.44 0 0 1 2.5 5c0-1.897 1.56-3.434 3.5-3.498V0h1v1.5h2V0h1v1.606c1.472.302 2.75 1.232 3.443 2.563l.231.443-.886.462-.231-.443c-.52-.998-1.46-1.717-2.557-1.999v4.87c1.94.064 3.5 1.6 3.5 3.498 0 1.897-1.56 3.434-3.5 3.498V16H9v-1.5zm0-7v-5H7v5h2zm0 6v-5H7v5h2zm1-.003c1.396-.062 2.5-1.16 2.5-2.497 0-1.336-1.104-2.435-2.5-2.497v4.994zM6 2.503C4.604 2.565 3.5 3.663 3.5 5c0 .659.273 1.292.762 1.76A2.687 2.687 0 0 0 6 7.498V2.503z'
          id='referralBonus16_svg__a'
        />
      </defs>
      <g fillRule='evenodd'>
        <mask id='referralBonus16_svg__b'>
          <use xlinkHref='#referralBonus16_svg__a' />
        </mask>
        <use fillRule='nonzero' xlinkHref='#referralBonus16_svg__a' />
        <g mask='url(#referralBonus16_svg__b)'>
          <path d='M0 0h16v16H0z' />
        </g>
      </g>
    </svg>
  )
}

SvgReferralBonus16.displayName = 'SvgReferralBonus16'
export default withStyles(styles)(SvgReferralBonus16)
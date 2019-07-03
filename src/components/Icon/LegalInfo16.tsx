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

const SvgLegalInfo16 = (props: Props) => {
  const { classes, className, style = {}, color, scale, size, base } = props

  if (size) {
    const name = 'SvgLegalInfo16'

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
          d='M11 0l4 4v12H1V0h10zm-.414 1H2v14h12V4.414L10.586 1zM8 11V7H6V6h3v5h2v1H6v-1h2zM7 4h2v1H7V4z'
          id='legalInfo16_svg__a'
        />
      </defs>
      <g fillRule='evenodd'>
        <mask id='legalInfo16_svg__b'>
          <use xlinkHref='#legalInfo16_svg__a' />
        </mask>
        <use fillRule='nonzero' xlinkHref='#legalInfo16_svg__a' />
        <g mask='url(#legalInfo16_svg__b)'>
          <path d='M0 0h16v16H0z' />
        </g>
      </g>
    </svg>
  )
}

SvgLegalInfo16.displayName = 'SvgLegalInfo16'
export default withStyles(styles)(SvgLegalInfo16)
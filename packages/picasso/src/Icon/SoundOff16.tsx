import React, { forwardRef, Ref } from 'react'
import cx from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { StandardProps } from '@toptal/picasso-shared'

import kebabToCamelCase from '../utils/kebab-to-camel-case'
import styles from './styles'
const BASE_SIZE = 16
type ScaleType = 1 | 2 | 3 | 4
export interface Props extends StandardProps {
  scale?: ScaleType
  color?: string
  base?: number
}
const SvgSoundOff16 = forwardRef(function SvgSoundOff16(
  props: Props,
  ref: Ref<SVGSVGElement>
) {
  const {
    classes: availableClasses,
    className,
    style = {},
    color,
    scale,
    base
  } = props
  const classes = [availableClasses.root, className]
  const scaledSize = base || BASE_SIZE * Math.ceil(scale || 1)
  const colorClassName = kebabToCamelCase(`${color}`)

  if (availableClasses[colorClassName]) {
    classes.push(availableClasses[colorClassName])
  }

  const svgStyle = {
    minWidth: `${scaledSize}px`,
    minHeight: `${scaledSize}px`,
    ...style
  }
  return (
    <svg
      viewBox='0 0 16 16'
      className={cx(...classes)}
      style={svgStyle}
      ref={ref}
    >
      <path d='M7 2v12l-3-3H0V5h4l3-3zM6 4.414L4.414 6H1v4h3.414L6 11.585V4.414zm7.5 1.379l.707.707-1.5 1.5 1.5 1.5-.707.707-1.5-1.5-1.5 1.5-.707-.707 1.5-1.5-1.5-1.5.707-.707 1.5 1.5 1.5-1.5z' />
    </svg>
  )
})
SvgSoundOff16.displayName = 'SvgSoundOff16'
export default withStyles(styles)(SvgSoundOff16)
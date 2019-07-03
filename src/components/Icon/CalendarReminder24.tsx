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

const SvgCalendarReminder24 = (props: Props) => {
  const { classes, className, style = {}, color, scale, size, base } = props

  if (size) {
    const name = 'SvgCalendarReminder24'

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
          d='M12 2.037V0h1v2.105a8.5 8.5 0 0 1 7.305 9.91l-1.302 7.385a1 1 0 0 0 .81 1.159l-.173.984L.93 18.244l.173-.985a1 1 0 0 0 1.159-.811l1.302-7.386A8.502 8.502 0 0 1 12 2.037zm6.018 17.19l1.302-7.387A7.5 7.5 0 1 0 4.548 9.236l-1.302 7.386a1.99 1.99 0 0 1-.437.938l15.299 2.698a1.99 1.99 0 0 1-.09-1.032zm-8.486 1.825l.086-.492.985.174-.087.492a1.5 1.5 0 1 0 2.955.521l.087-.492.984.173-.086.493a2.5 2.5 0 0 1-4.924-.869zM1.877 5.58l.843.538a10.965 10.965 0 0 0-1.553 4.001 10.965 10.965 0 0 0 .09 4.291l-.975.217a11.965 11.965 0 0 1-.1-4.681 11.965 11.965 0 0 1 1.695-4.366zm20.246 12.899l-.843-.538a10.965 10.965 0 0 0 1.553-4.002c.254-1.441.22-2.893-.09-4.29l.975-.218c.34 1.526.377 3.11.1 4.682a11.965 11.965 0 0 1-1.695 4.366z'
          id='calendarReminder24_svg__a'
        />
      </defs>
      <g fillRule='evenodd'>
        <mask id='calendarReminder24_svg__b'>
          <use xlinkHref='#calendarReminder24_svg__a' />
        </mask>
        <use fillRule='nonzero' xlinkHref='#calendarReminder24_svg__a' />
        <g mask='url(#calendarReminder24_svg__b)'>
          <path d='M0 0h24v24H0z' />
        </g>
      </g>
    </svg>
  )
}

SvgCalendarReminder24.displayName = 'SvgCalendarReminder24'
export default withStyles(styles)(SvgCalendarReminder24)
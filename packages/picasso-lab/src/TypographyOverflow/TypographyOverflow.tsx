import React, { MouseEvent, ReactNode, useState } from 'react'
import { Tooltip, Typography, TypographyProps } from '@toptal/picasso'
import { BaseProps } from '@toptal/picasso-shared'
import { DelayType, VariantType } from '@toptal/picasso/Tooltip/Tooltip'
import { makeStyles, Theme } from '@material-ui/core/styles'
import cx from 'classnames'

import styles from './styles'

export interface Props extends BaseProps, TypographyProps {
  /** A typography which can possibly overflow */
  children?: ReactNode
  /** Number of lines displayed */
  lines?: number
  /** A content to show in tooltip when typography overflows. By default, TypographyOverflow's children are used. */
  tooltipContent?: ReactNode
  /** A delay in showing the tooltip when typography overflows. */
  tooltipDelay?: DelayType
  /** Tooltip color variant to use. */
  tooltipVariant?: VariantType
  /** Do not show tooltips for shorten content. */
  disableTooltip?: boolean
}

const useStyles = makeStyles<Theme, Props>(styles, {
  name: 'TypographyOverflow'
})

/**
 * Pixel value of font render space correction.
 * It's individual for different fonts, so it won't work for 100% cases,
 * but it allows us to be much closer to actual overflow detection while calculating.
 * Tolerance of the render could be 0-2px depending on the font that is used,
 * and also affected by the right-padding added at Ellipsis component.
 */
const FONT_RENDER_CORRECTION = 0.475

export const TypographyOverflow = (props: Props) => {
  const {
    children,
    lines = 1,
    tooltipContent,
    tooltipDelay,
    tooltipVariant,
    disableTooltip,
    className,
    ...rest
  } = props
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)
  const classes = useStyles(props)

  const isMultiline = lines > 1

  const handleMouseOver = (event: MouseEvent<HTMLElement>) => {
    const { scrollWidth, scrollHeight } = event.currentTarget
    const { width, height } = event.currentTarget.getBoundingClientRect()
    const shouldShowTooltip =
      scrollWidth > width + FONT_RENDER_CORRECTION ||
      scrollHeight > height + FONT_RENDER_CORRECTION

    if (shouldShowTooltip) {
      setIsTooltipOpen(true)
    }
  }
  const handleMouseOut = () => setIsTooltipOpen(false)

  return (
    <Tooltip
      data-testid='TypographyOverflow-Tooltip'
      placement='top'
      open={isTooltipOpen}
      content={tooltipContent ?? children}
      variant={tooltipVariant}
      delay={tooltipDelay}
      interactive
    >
      <Typography
        {...rest}
        onMouseOver={disableTooltip ? undefined : handleMouseOver}
        onMouseOut={
          disableTooltip && !isTooltipOpen ? undefined : handleMouseOut
        }
        className={cx(
          classes.wrapper,
          isMultiline ? classes.multiLine : classes.singleLine,
          className
        )}
      >
        {children}
      </Typography>
    </Tooltip>
  )
}

TypographyOverflow.displayName = 'TypographyOverflow'

TypographyOverflow.defaultProps = {
  noWrap: true
}

export default TypographyOverflow

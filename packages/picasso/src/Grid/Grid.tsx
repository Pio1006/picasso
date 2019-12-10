import React, { ReactNode, forwardRef, HTMLAttributes } from 'react'
import { withStyles } from '@material-ui/core/styles'
import MUIGrid, {
  GridSpacing,
  GridItemsAlignment,
  GridDirection,
  GridJustification,
  GridWrap
} from '@material-ui/core/Grid'
import {
  StandardProps,
  PicassoComponentWithRef,
  CompoundedComponentWithRef
} from '@toptal/picasso-shared'

import GridItem from '../GridItem'
import styles from './styles'

export interface Props extends StandardProps, HTMLAttributes<HTMLElement> {
  /** Grid content containing Grid.Item */
  children?: ReactNode
  /** Defines amount of space between Grid.Item components (in px) */
  spacing?: 0 | 8 | 16 | 32 | 64 | 72 | 80
  /** Defines the orientation of the grid */
  direction?: GridDirection
  /** Defines the align-items style property based on the direction */
  alignItems?: GridItemsAlignment
  /** Defines the justify-content style property based on the direction */
  justifyContent?: GridJustification
  /** Defines the flex-wrap style property based on the direction */
  wrap?: GridWrap
}

interface StaticProps {
  Item: typeof GridItem
}

const humanToMUISpacing = (spacing: number) => {
  /** Material Design margins and columns follow an 8px square baseline grid */
  return (spacing / 8) as GridSpacing
}

// eslint-disable-next-line react/display-name
export const Grid = forwardRef<HTMLDivElement, Props>(function Grid(
  {
    children,
    spacing,
    direction,
    alignItems,
    justifyContent,
    wrap,
    classes,
    className,
    style,
    ...rest
  },
  ref
) {
  return (
    <MUIGrid
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      ref={ref}
      container
      spacing={humanToMUISpacing(spacing!)}
      direction={direction}
      alignItems={alignItems}
      justify={justifyContent}
      wrap={wrap}
      classes={classes}
      className={className}
      style={style}
    >
      {children}
    </MUIGrid>
  )
}) as CompoundedComponentWithRef<Props, HTMLDivElement, StaticProps>

Grid.defaultProps = {
  alignItems: 'flex-start',
  direction: 'row',
  justifyContent: 'flex-start',
  spacing: 32,
  wrap: 'wrap'
}

Grid.Item = GridItem

export default withStyles(styles)(Grid) as PicassoComponentWithRef<
  Props,
  HTMLDivElement,
  StaticProps
>
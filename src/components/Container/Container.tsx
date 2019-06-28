import React, { ReactNode, FunctionComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import cx from 'classnames'

import { StandardProps, SpacingType, spacingToEm } from '../Picasso'
import styles from './styles'

type DirectionType = 'row' | 'column'

type AlignItemsType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline'
type JustifyContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

interface Props extends StandardProps {
  /** Content of Container */
  children: ReactNode
  /** margin-top for the container transformed to `em` */
  top?: SpacingType
  /** margin-bottom for the container transformed to `em` */
  bottom?: SpacingType
  /** margin-left for the container transformed to `em` */
  left?: SpacingType
  /** margin-right for the container transformed to `em` */
  right?: SpacingType
  /** padding for the container transformed to `em` */
  padded?: SpacingType
  /** Whether container should act as inline element `display: inline-block` */
  inline?: boolean
  /** Use flexbox */
  flex?: boolean
  /** Set flex direction */
  direction?: DirectionType
  /** Defines the align-items style property */
  alignItems?: AlignItemsType
  /** Defines the justify-content style property */
  justifyContent?: JustifyContentType
  /** Whether container has border or not */
  bordered?: boolean
}

/**
 * Container component used for spacing 2 elements
 */
export const Container: FunctionComponent<Props> = ({
  children,
  className,
  top,
  bottom,
  left,
  right,
  padded,
  inline,
  flex,
  direction,
  alignItems,
  justifyContent,
  style,
  bordered = false,
  classes
}) => {
  const margins = {
    ...(top && { marginTop: spacingToEm(top) }),
    ...(bottom && { marginBottom: spacingToEm(bottom) }),
    ...(left && { marginLeft: spacingToEm(left) }),
    ...(right && { marginRight: spacingToEm(right) })
  }

  return (
    <div
      className={cx(
        {
          [classes[`${padded}Padding`]]: typeof padded === 'string',
          [classes.bordered]: bordered,
          [classes.flex]: flex,
          [classes.inline]: inline
        },
        className
      )}
      style={{
        ...margins,
        ...(direction && { flexDirection: direction }),
        ...(alignItems && { alignItems }),
        ...(justifyContent && { justifyContent }),
        ...(typeof padded === 'number' && { padding: spacingToEm(padded) }),
        ...style
      }}
    >
      {children}
    </div>
  )
}

Container.defaultProps = {
  inline: false
}

export default withStyles(styles)(Container)

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { ThemeStyle as MUIVariant } from '@material-ui/core/styles/createTypography'
import { PropTypes } from '@material-ui/core'
import MUITypography from '@material-ui/core/Typography'
import cx from 'classnames'

import styles from './styles'
import { Classes } from '../styles/types'

type VariantType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'large'
  | 'small'
  | 'caption'
  | 'body'

type Weights = 'thin' | 'light' | 'regular' | 'semibold' | 'bold'

interface Props {
  /** Font variant inner text */
  variant?: VariantType
  classes: Classes
  /** Text content */
  children?: React.ReactNode
  className?: string
  /** Controls whether the Typography is inline or not */
  inline?: boolean
  /** Text align of the inner text */
  align?: PropTypes.Alignment
  /** Font weight of the inner text */
  weight?: Weights
  /** Invert color */
  invert?: boolean
}

interface Variants {
  // TODO: see if string can be replaced with VariantType
  [name: string]: MUIVariant
}

const VARIANTS: Variants = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  caption: 'caption',
  large: 'body1',
  small: 'body1',
  body: 'body1'
}

const resolveRootClass = (props: Props) => {
  const { classes, weight, variant, invert } = props

  return cx(
    {
      [classes.large]: variant === 'large',
      [classes.small]: variant === 'small',
      [classes.body]: variant === 'body',
      [classes.invert]: invert
    },
    classes[weight!]
  )
}

export const Typography: React.FunctionComponent<Props> = props => {
  const { variant, children, align, className, inline } = props
  const resolvedVariant = VARIANTS[variant!]
  const rootClass = resolveRootClass(props)

  return (
    <MUITypography
      align={align}
      className={className}
      classes={{
        root: rootClass
      }}
      variant={resolvedVariant}
      inline={inline}
    >
      {children}
    </MUITypography>
  )
}

Typography.defaultProps = {
  inline: false,
  variant: 'body',
  weight: 'regular'
}

Typography.displayName = 'Typography'

export default withStyles(styles)(Typography)

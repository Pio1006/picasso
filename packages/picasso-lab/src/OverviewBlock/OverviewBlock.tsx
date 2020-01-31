import React, {
  forwardRef,
  ElementType,
  FunctionComponent,
  HTMLAttributes,
  MouseEvent
} from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'
import cx from 'classnames'
import {
  CompoundedComponentWithRef,
  OverridableComponent,
  ColorType,
  BaseProps
} from '@toptal/picasso-shared'
import { Typography } from '@toptal/picasso'

import styles from './styles'
import OverviewBlockGroup from '../OverviewBlockGroup'

type Variant =
  | 'value-red'
  | 'value-green'
  | 'value-blue'
  | 'value-yellow'
  | 'label-red'
  | 'label-green'
  | 'label-blue'
  | 'label-yellow'

type ColorSettings = {
  value: ColorType
  label: ColorType
}

export type Props = BaseProps &
  HTMLAttributes<HTMLButtonElement> & {
    /** Counter value  */
    value: string
    /** Counter title  */
    label: string
    /** The color variant  */
    variant?: Variant
    /** Component used for the root node. Either a string to use a DOM element or a component. */
    as?: ElementType
    /** Callback invoked when component is clicked */
    onClick?: (event: MouseEvent) => void
  }

interface StaticProps {
  Group: FunctionComponent
}

const useStyles = makeStyles<Theme, Props>(styles, {
  name: 'PicassoOverviewBlock'
})

export const OverviewBlock: OverridableComponent<Props> & StaticProps =
  // eslint-disable-next-line react/display-name
  forwardRef<HTMLButtonElement, Props>(function OverviewBlock(props, ref) {
    const {
      value,
      label,
      variant,
      as: Component = 'button',
      className,
      onClick,
      ...rest
    } = props
    const classes = useStyles(props)

    const color: ColorSettings = {
      value: 'black',
      label: 'dark-grey'
    }

    if (variant) {
      const [partName, colorName] = variant.split('-') as [
        keyof ColorSettings,
        ColorType
      ]

      color[partName] = colorName
    }

    return (
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        ref={ref}
        className={cx(
          { [classes.clickable]: Boolean(onClick) },
          classes.root,
          className
        )}
        onClick={onClick}
      >
        <Typography size='large' weight='semibold' color={color.value}>
          {value}
        </Typography>
        <Typography
          size='small'
          weight='semibold'
          className={classes.title}
          color={color.label}
        >
          {label}
        </Typography>
      </Component>
    )
  }) as CompoundedComponentWithRef<Props, HTMLElement, StaticProps>

OverviewBlock.defaultProps = {
  as: 'button'
}

OverviewBlock.Group = OverviewBlockGroup
OverviewBlock.displayName = 'OverviewBlock'

export default OverviewBlock
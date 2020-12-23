import React, { ReactElement, MouseEvent, forwardRef, ElementType } from 'react'
import cx from 'classnames'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { BaseProps, ButtonOrAnchorProps } from '@toptal/picasso-shared'

import Button from '../Button'
import kebabToCamelCase from '../utils/kebab-to-camel-case'
import styles from './styles'

export type VariantType = 'primary' | 'flat' | 'transparent'

export interface Props extends BaseProps, ButtonOrAnchorProps {
  /** Show button in the active state (left mouse button down) */
  active?: boolean
  /** The component used for the root node. Either a string to use a DOM element or a component. */
  as?: ElementType
  /** Disables button */
  disabled?: boolean
  /** Set focused style for the button */
  focused?: boolean
  /** Set hovered style for the button */
  hovered?: boolean
  /** Add an `<Icon />` along Button's children */
  icon?: ReactElement
  /** Shows a loading indicator and disables click events */
  loading?: boolean
  /** Callback invoked when component is clicked */
  onClick?: (event: MouseEvent<HTMLButtonElement & HTMLAnchorElement>) => void
  /** The variant to use */
  variant?: VariantType
  /** HTML Value of Button component */
  value?: string | number
}

const useStyles = makeStyles<Theme>(styles, {
  name: 'PicassoButtonCircular'
})

export const ButtonCircular = forwardRef<HTMLButtonElement, Props>(
  function ButtonCircular(props, ref) {
    const {
      className,
      variant,
      active,
      focused,
      hovered,
      disabled,
      ...rest
    } = props
    const classes = useStyles(props)

    const { root: rootClass, focusVisible: focusVisibleClass } = classes

    const variantClassName = classes[kebabToCamelCase(variant!)]

    const rootClassName = cx(
      {
        [classes.active]: active,
        [classes.focused]: focused,
        [classes.hovered]: hovered,
        [classes.disabled]: disabled
      },
      variantClassName,
      rootClass
    )

    return (
      <Button
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        ref={ref}
        classes={{
          root: rootClassName,
          focusVisible: focusVisibleClass
        }}
        className={className}
        size='small'
        active={active}
        hovered={hovered}
        focused={focused}
        disabled={disabled}
      />
    )
  }
)

ButtonCircular.defaultProps = {
  variant: 'primary'
}

ButtonCircular.displayName = 'ButtonCircular'

export default ButtonCircular
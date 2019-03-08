import React from 'react'
import cx from 'classnames'
import MUISelect from '@material-ui/core/Select'
import { withStyles } from '@material-ui/core/styles'

import FormControl from '../FormControl'
import InputLabel from '../InputLabel'
import Input from '../Input'
import OutlinedInput from '../OutlinedInput'
import MenuItem from '../MenuItem'
import { Classes } from '../styles/types'
import styles from './styles'

interface Option {
  key: number
  text: string | React.ReactNode
  value: string | number
}

export interface Props {
  classes: Classes
  /** Extra css classes to be passed to `Select` */
  className?: string
  /** If true, the switch will be disabled */
  disabled?: boolean
  /** Component ID */
  id?: string
  /** Take the full width of a container */
  fullWidth?: boolean
  /** Inner text label for the `Select` */
  label?: string
  /** Placeholder option which is selected by default */
  placeholder?: string
  /** Whether `Select` should be rendered as native HTML `<select />` */
  native?: boolean
  /** Callback invoked when `Select` changes its state. */
  onChange?: (
    event: React.ChangeEvent<HTMLSelectElement>,
    child: React.ReactNode
  ) => void
  /** List of options to be rendered as `Select` */
  options: Option[]
  /** Selected value */
  value?: string | number
  /** The variant to use */
  variant?: 'standard' | 'outlined'
}

const renderOptions = (
  options: Option[],
  placeholder?: string,
  isNative?: boolean
) => {
  if (!options.length) {
    return null
  }

  const OptionComponent = isNative ? 'option' : MenuItem

  const resultOptions = options.map(({ key, value, text }) => (
    // @ts-ignore
    <OptionComponent key={key || value} value={value}>
      {text}
    </OptionComponent>
  ))

  if (placeholder) {
    resultOptions.unshift(
      // @ts-ignore
      <OptionComponent disabled key='placeholder' value=''>
        {placeholder}
      </OptionComponent>
    )
  }

  return resultOptions
}

export const Select: React.FunctionComponent<Props> = props => {
  const {
    classes,
    className,
    fullWidth,
    id,
    label,
    native,
    options,
    placeholder,
    variant,
    ...rest
  } = props
  const hasLabel = !!label
  const outlinedInput =
    variant === 'outlined' ? (
      <OutlinedInput
        classes={{
          input: hasLabel ? classes.inputWithLabel : classes.input
        }}
        fullWidth={fullWidth}
        labelWidth={0}
      />
    ) : (
      <Input
        classes={{
          input: hasLabel ? classes.inputWithLabel : classes.input
        }}
        disableUnderline
        fullWidth={fullWidth}
      />
    )

  const select = (
    <MUISelect
      className={className}
      classes={{
        root: fullWidth ? classes.rootFullWidth : classes.root,
        icon: classes.icon,
        select: classes.select
      }}
      displayEmpty
      id={id}
      input={outlinedInput}
      native={native}
      variant={variant}
      {...rest}
      MenuProps={{
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left'
        },
        getContentAnchorEl: undefined // needed to restore default behaviour
      }}
    >
      {renderOptions(options, placeholder, native)}
    </MUISelect>
  )

  return (
    <FormControl
      className={cx(className, { [classes.rootFullWidth]: fullWidth })}
    >
      {hasLabel && (
        <InputLabel
          classes={{
            root: classes.label,
            shrink: classes.labelShrink
          }}
          htmlFor={id}
          variant={variant}
        >
          {label}
        </InputLabel>
      )}
      {select}
    </FormControl>
  )
}

Select.defaultProps = {
  disabled: false,
  fullWidth: false,
  native: false,
  onChange: () => {},
  value: '',
  variant: 'outlined'
}

Select.displayName = 'Select'

export default withStyles(styles)(Select)

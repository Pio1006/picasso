import React from 'react'
import MUITextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

const TextField = props => {
  const {
    Icon,
    iconPosition,
    InputProps = {},
    InputLabelProps = {},
    classes,
    children,
    ...restProps
  } = props

  if (Icon) {
    const IconAdornment = (
      <InputAdornment position='start'>{Icon}</InputAdornment>
    )

    // InputLabelProps.shrink = 'auto' TODO: uncomment when 'auto' PR is merged
    InputProps.disableUnderline = true
    InputLabelProps.classes = { shrink: classes.shrink }

    if (iconPosition === 'end') {
      InputProps.endAdornment = IconAdornment
    } else {
      InputProps.startAdornment = IconAdornment
      InputLabelProps.className = classes.iconStart
    }
  }

  return (
    <MUITextField
      InputLabelProps={InputLabelProps}
      InputProps={InputProps}
      {...restProps}
      variant='filled'
    >
      {children}
    </MUITextField>
  )
}

TextField.defaultProps = {
  iconPosition: 'end'
}

export default withStyles(styles.TextField)(TextField)

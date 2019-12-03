import React, { FunctionComponent } from 'react'
import MUIRadioGroup, { RadioGroupProps } from '@material-ui/core/RadioGroup'
import { Theme, makeStyles } from '@material-ui/core/styles'
import cx from 'classnames'

import styles from './styles'

export interface Props extends RadioGroupProps {
  /** Align radios horizontally  */
  horizontal?: boolean
}

const useStyles = makeStyles<Theme, Props>(styles)

const RadioGroup: FunctionComponent<Props> = props => {
  const { horizontal, className, ...rest } = props
  const classes = useStyles(props)

  return (
    <MUIRadioGroup
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      classes={classes}
      className={cx({ [classes.horizontal]: horizontal }, className)}
    />
  )
}

RadioGroup.defaultProps = {
  horizontal: false
}

export default RadioGroup

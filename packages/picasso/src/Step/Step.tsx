import React, { FunctionComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import MUIStep, { StepProps } from '@material-ui/core/Step'

import styles from './styles'

export const Step: FunctionComponent<StepProps> = ({
  active,
  children,
  completed,
  index,
  ...rest
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MUIStep {...rest} active={active} completed={completed} index={index}>
    {children}
  </MUIStep>
)

Step.displayName = 'Step'

export default withStyles(styles)(Step)
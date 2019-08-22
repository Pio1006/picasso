import React, { forwardRef, HTMLAttributes } from 'react'
import { withStyles } from '@material-ui/core/styles'

import { StandardProps } from '../Picasso'
import styles from './styles'
import Container from '../Container'
import Typography from '../Typography'

export interface Props extends StandardProps, HTMLAttributes<HTMLDivElement> {
  /** Title of Helpbox */
  children: string
}

export const HelpboxTitle = forwardRef<HTMLDivElement, Props>(
  function HelpboxTitle({ classes, className, style, children, ...rest }, ref) {
    return (
      <Container
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        ref={ref}
        classes={classes}
        className={className}
        style={style}
        bottom='medium'
      >
        <Typography variant='heading' size='small'>
          {children}
        </Typography>
      </Container>
    )
  }
)

HelpboxTitle.defaultProps = {}

HelpboxTitle.displayName = 'HelpboxTitle'

export default withStyles(styles)(HelpboxTitle)

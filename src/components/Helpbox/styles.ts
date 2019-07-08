import { createStyles } from '@material-ui/core/styles'

export default () =>
  createStyles({
    root: {
      position: 'relative'
    },
    closeButton: {
      position: 'absolute',
      top: '1.625em',
      right: '1.25em',
      background: 'transparent',
      border: 0,
      padding: 0,

      '&:hover': {
        background: 'transparent'
      }
    }
  })
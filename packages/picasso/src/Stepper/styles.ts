import { createStyles } from '@material-ui/core/styles'
import { PicassoProvider } from '@toptal/picasso-shared'

PicassoProvider.override(() => ({
  MuiStepper: {
    root: {
      padding: 0
    }
  }
}))

export default () =>
  createStyles({
    fullWidth: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  })
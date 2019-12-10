import { Theme, createStyles } from '@material-ui/core'
import { PicassoProvider } from '@toptal/picasso-shared'

PicassoProvider.override(({ palette }: Theme) => ({
  MuiInputLabel: {
    root: {
      fontSize: 'unset'
    },
    error: {
      color: palette.red.main
    }
  }
}))

export default () =>
  createStyles({
    root: {}
  })
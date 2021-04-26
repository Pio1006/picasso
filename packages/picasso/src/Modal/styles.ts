import { Theme, createStyles } from '@material-ui/core/styles'

const maxHeight = 'calc(100% - 6rem)'
const maxWidth = 'calc(100% - 6rem)'
const maxHeightForTopAligned = 'calc(100% - 4rem)'

export default ({ screens, sizes, palette }: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      // do not remove, should be covered with test
      // https://toptal-core.atlassian.net/browse/FX-1543
      fontSize: '1rem'
    },
    container: {},
    paper: {
      height: 'auto',
      maxHeight,
      maxWidth,
      borderRadius: sizes.borderRadius.medium,
      margin: '2rem',
      backgroundColor: palette.secondary.main,

      [screens('small')]: {
        maxWidth: 'none',
        maxHeight: 'none',
        margin: '1rem'
      }
    },
    small: {
      width: '32.5rem'
    },
    medium: {
      width: '40.625rem'
    },
    large: {
      width: '50rem'
    },
    'full-screen': {
      height: maxHeight,
      width: maxWidth
    },
    topAlignedDialog: {
      position: 'absolute',
      top: 0,
      maxHeight: maxHeightForTopAligned
    },
    closeButton: {
      position: 'absolute',
      right: '2em',
      top: '2em'
    }
  })

import { createStyles, Theme } from '@material-ui/core/styles'
import { rem, alpha } from '@toptal/picasso-shared'
export default ({ palette }: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: alpha(palette.grey.lighter!, 0.32),
      padding: '0.5rem 1rem',
      minWidth: rem('150px'),
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      '&:hover': {
        backgroundColor: palette.grey.lighter
      }
    },
    title: {
      fontSize: rem('11px')
    }
  })

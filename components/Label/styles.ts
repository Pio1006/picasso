import { Theme, createStyles } from '@material-ui/core/styles'

export default ({ palette }: Theme) =>
  createStyles({
    flat: {
      backgroundColor: palette.grey[100],
      color: palette.grey[300]
    },
    success: {
      backgroundColor: palette.success.light,
      color: palette.success.main
    },
    error: {
      backgroundColor: palette.error.light,
      color: palette.error.main
    },

    deleteIcon: {
      display: 'flex',
      justifyContent: 'center',

      color: palette.primary.main,
      fontSize: '0.85em',
      margin: '0 0.5em 0 -0.5em',

      opacity: 0.5,

      '&:hover': {
        opacity: 1,
        color: palette.primary.main
      }
    }
  })

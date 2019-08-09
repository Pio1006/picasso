import { Theme, createStyles } from '@material-ui/core/styles'

export default ({ palette }: Theme) =>
  createStyles({
    root: {
      height: '100%',
      width: '17em',
      boxShadow: `inset -1px 0px 0px 0px ${palette.grey.lighter}`,
      padding: '1em 0'
    },
    spacer: {
      order: 50,
      flex: 1,
      height: '100%'
    }
  })

import { Theme, createStyles } from '@material-ui/core/styles'
import { PicassoProvider, rem } from '@toptal/picasso-shared'

PicassoProvider.override(() => ({
  MuiSlider: {
    thumb: {
      '&:hover, &$active, &$focusVisible': {
        boxShadow: 'none'
      }
    }
  }
}))

export default ({ palette }: Theme) =>
  createStyles({
    wrapper: {
      margin: `${rem('6px')} 0`
    },
    root: {
      display: 'block',
      color: palette.grey.main,
      padding: `${rem('6px')} 0`,
      margin: `-${rem('6px')} 0`,
      height: rem('1px')
    },
    rail: {
      height: rem('1px'),
      borderRadius: 'unset',
      opacity: 0.24
    },
    track: {
      backgroundColor: palette.grey.main,
      borderRadius: 'unset',
      height: rem('1px')
    },
    thumb: {
      backgroundColor: palette.primary.main,
      border: `${rem('2px')} solid ${palette.common.white}`,
      height: rem('13px'),
      width: rem('13px'),
      marginTop: rem('-6px')
    },
    mark: {
      backgroundColor: palette.grey.main,
      height: rem('6px'),
      width: rem('6px'),
      borderRadius: '50%',
      border: `${rem('2px')} solid ${palette.common.white}`,
      opacity: 1,
      top: rem('1.5px'),
      transform: 'translateX(-50%)',
      boxSizing: 'content-box'
    },
    markActive: {
      backgroundColor: palette.primary.main
    },
    markInactive: {
      backgroundColor: palette.grey.main
    },
    markTrack: {
      backgroundColor: palette.primary.main
    },
    unmarkTrack: {
      backgroundColor: palette.grey.lighter
    },
    hideThumb: {
      display: 'none'
    }
  })

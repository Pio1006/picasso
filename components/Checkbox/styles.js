import { PicassoProvider } from '../Picasso'
import pallete from '../Picasso/pallete'

const unit = 8

PicassoProvider.override(() => ({
  MuiCheckbox: {
    root: {
      fontSize: `${2 * unit}px`,
      lineHeight: `${2 * unit}px`,
      padding: 0,

      '&$disabled': {
        cursor: 'not-allowed',
        pointerEvents: 'auto'
      }
    },
    disabled: {
      opacity: 0.5
    }
  }
}))

const root = {
  '&:hover $uncheckedIcon': {
    border: `1px solid ${pallete.primary.main}`
  }
}

const disabled = {
  '&:hover $uncheckedIcon': {
    border: `1px solid ${pallete.grey[50]}`
  }
}

const checkedIcon = {
  height: `${2 * unit}px`,
  width: `${2 * unit}px`,
  transition: 'all .1s ease',
  background: pallete.primary.main,
  border: `1px solid ${pallete.primary.dark}`
}

const uncheckedIcon = {
  height: `${2 * unit}px`,
  width: `${2 * unit}px`,
  transition: 'all .1s ease',
  background: pallete.common.white,
  border: `1px solid ${pallete.grey[50]}`
}

const indeterminateIcon = {
  height: `${2 * unit}px`,
  width: `${2 * unit}px`,
  transition: 'all .1s ease',
  background: pallete.primary.main,
  border: `1px solid ${pallete.primary.dark}`
}

export default {
  root,
  disabled,
  checkedIcon,
  uncheckedIcon,
  indeterminateIcon
}

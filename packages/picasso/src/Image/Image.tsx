import React, { forwardRef, ImgHTMLAttributes } from 'react'
import cx from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { StandardProps } from '@toptal/picasso-shared'

import styles from './styles'

type VariantType = 'rectangle' | 'circular'

export interface Props
  extends StandardProps,
    ImgHTMLAttributes<HTMLImageElement> {
  /** Image alt text */
  alt: string
  /** Image url */
  src: string
  /** A set of image sources */
  srcSet?: string
  /** Image shape type */
  variant?: VariantType
}

export const Image = forwardRef<HTMLImageElement, Props>(function Image(
  {
    src,
    srcSet,
    alt,
    classes,
    className,
    variant = 'rectangle',
    style,
    ...rest
  },
  ref
) {
  return (
    <img
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      ref={ref}
      src={src}
      srcSet={srcSet}
      alt={alt}
      className={cx(
        {
          [classes.circular]: variant === 'circular'
        },
        classes.root,
        className
      )}
      style={style}
    />
  )
})

Image.defaultProps = {
  variant: 'rectangle'
}

Image.displayName = 'Image'

export default withStyles(styles)(Image)
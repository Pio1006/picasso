import { CSSProperties, FunctionComponent, SyntheticEvent } from 'react'

import { Classes } from '../styles/types'

export interface BaseProps {
  /** Classnames applied to root element */
  className?: string
  /** Style applied to root element */
  style?: CSSProperties
}

export interface JssProps {
  classes: Classes
}

export type StandardProps = BaseProps & JssProps

// Take all props, excluding props from JssProps
// type and other passed props
//
// example:
// OmitInternalProps<Props>
// OmitInternalProps<Props, 'name' | 'variant'>
export type OmitInternalProps<T, K = ''> = Pick<
  T,
  Exclude<keyof T, keyof JssProps | K>
>

export type PicassoComponent<P, S = {}> = FunctionComponent<
  OmitInternalProps<P> & Partial<JssProps>
> &
  S

type EventListenerType = (event: SyntheticEvent<HTMLElement>) => void

export interface TooltipEventListeners {
  onBlur?: EventListenerType
  onFocus?: EventListenerType
  onMouseLeave?: EventListenerType
  onMouseOver?: EventListenerType
  onTouchEnd?: EventListenerType
  onTouchStart?: EventListenerType
}

type Sizes = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'

export type SizeType<T extends Sizes> = T

export type SpacingType =
  | number
  | SizeType<'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'>

export enum SpacingEnum {
  xsmall = 0.5,
  small = 1,
  medium = 1.5,
  large = 2,
  xlarge = 2.5
}

export const spacingToEm = (spacing: SpacingType) =>
  typeof spacing === 'number' ? `${spacing}em` : `${SpacingEnum[spacing]}em`

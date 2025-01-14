import React, { forwardRef, ReactNode, HTMLAttributes } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import cx from 'classnames'
import {
  BaseProps,
  PicassoComponentWithRef,
  CompoundedComponentWithRef
} from '@toptal/picasso-shared'

import PageHelmet from '../PageHelmet'
import PageTopBar from '../PageTopBar'
import PageTopBarMenu from '../PageTopBarMenu'
import PageFooter from '../PageFooter'
import PageContent from '../PageContent'
import PageBanner from '../PageBanner'
import PageAutocomplete from '../PageAutocomplete'
import PageArticle from '../PageArticle'
import { PageContextProps, ViewportWidthType } from './types'
import PageSidebar from '../Sidebar'
import styles from './styles'

export interface Props extends BaseProps, HTMLAttributes<HTMLDivElement> {
  /** DEPRECATED! Component becomes responsive with width 100% and overrides width prop */
  fullWidth?: boolean
  /** Define container width `wide` | `full` */
  width?: ViewportWidthType
  /** Horizontally centers the content */
  centered?: boolean
  /** Children components (`Page.TopBar`, `Page.Content`, `Page.Footer`) */
  children: ReactNode
}

export interface StaticProps {
  Helmet: typeof PageHelmet
  TopBar: typeof PageTopBar
  TopBarMenu: typeof PageTopBarMenu
  Content: typeof PageContent
  Footer: typeof PageFooter
  Sidebar: typeof PageSidebar
  Banner: typeof PageBanner
  Autocomplete: typeof PageAutocomplete
  Article: typeof PageArticle
}

export const PageContext = React.createContext<PageContextProps>({})

const useStyles = makeStyles<Theme>(styles, {
  name: 'Page'
})

// eslint-disable-next-line react/display-name
export const Page = forwardRef<HTMLDivElement, Props>(function Page(
  props,
  ref
) {
  const { children, className, style, width, fullWidth, ...rest } = props
  const classes = useStyles()

  return (
    <div
      {...rest}
      ref={ref}
      className={cx(classes.root, className)}
      style={style}
    >
      <PageContext.Provider value={{ width, fullWidth }}>
        {children}
      </PageContext.Provider>
    </div>
  )
}) as CompoundedComponentWithRef<Props, HTMLDivElement, StaticProps>

Page.displayName = 'Page'

Page.TopBar = PageTopBar

Page.TopBarMenu = PageTopBarMenu

Page.Content = PageContent

Page.Footer = PageFooter

Page.Sidebar = PageSidebar

Page.Banner = PageBanner

Page.Helmet = PageHelmet

Page.Autocomplete = PageAutocomplete

Page.Article = PageArticle

export default Page as PicassoComponentWithRef<Props, HTMLElement, StaticProps>

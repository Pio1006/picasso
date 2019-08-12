import React, { FunctionComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import cx from 'classnames'

import { StandardProps, PicassoComponent } from '../../Picasso'
import Container from '../../Container'
import SidebarMenu from '../SidebarMenu'
import SidebarItem from '../SidebarItem'
import SidebarLogo from '../SidebarLogo'
import styles from './styles'
import { SidebarContextProps, VariantType } from './types'

export interface Props extends StandardProps {
  /** Style variant of Sidebar and subcomponents */
  variant?: VariantType
}

interface StaticProps {
  Menu: typeof SidebarMenu
  Item: typeof SidebarItem
  Logo: typeof SidebarLogo
}

export const SidebarContext = React.createContext<SidebarContextProps>(
  {} as SidebarContextProps
)

export const Sidebar: FunctionComponent<Props> & StaticProps = ({
  children,
  variant,
  className,
  style,
  classes
}) => (
  <Container
    flex
    direction='column'
    style={style}
    className={cx(classes.root, className, classes[variant!])}
  >
    <div className={classes.spacer} />
    <SidebarContext.Provider value={{ variant }}>
      {children}
    </SidebarContext.Provider>
  </Container>
)

Sidebar.defaultProps = {
  variant: 'light'
}

Sidebar.displayName = 'Sidebar'

Sidebar.Menu = SidebarMenu

Sidebar.Item = SidebarItem

Sidebar.Logo = SidebarLogo

export default withStyles(styles)(Sidebar) as PicassoComponent<
  Props,
  StaticProps
>

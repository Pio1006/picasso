import React, { FunctionComponent } from 'react'
import { render, cleanup } from '@testing-library/react'

import Picasso, { OmitInternalProps } from '../Picasso'
import MenuItem, { Props } from '../MenuItem'

const TestMenuItem: FunctionComponent<OmitInternalProps<Props>> = ({
  children,
  menu
}) => (
  <Picasso loadFonts={false}>
    <MenuItem menu={menu}>{children}</MenuItem>
  </Picasso>
)

afterEach(cleanup)

describe('MenuItem', () => {
  test('default render', () => {
    const { container } = render(<TestMenuItem>Item</TestMenuItem>)

    expect(container).toMatchSnapshot()
  })

  test('has chevron if has nested menu', () => {
    const { container } = render(
      <TestMenuItem menu={<div />}>Item</TestMenuItem>
    )

    expect(container).toMatchSnapshot()
  })
})
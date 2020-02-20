import React, { FunctionComponent } from 'react'
/* eslint-disable-next-line */
import { render } from '@toptal/picasso/test-utils'
import { OmitInternalProps } from '@toptal/picasso-shared'

import Sidebar, { Props } from './Sidebar'

const TestSidebar: FunctionComponent<OmitInternalProps<Props>> = ({
  children
}) => <Sidebar>{children}</Sidebar>

describe('Sidebar', () => {
  test('default render', () => {
    const { container } = render(<TestSidebar />)

    expect(container).toMatchSnapshot()
  })

  test('with menu ', () => {
    const { container } = render(
      <TestSidebar>
        <Sidebar.Menu />
      </TestSidebar>
    )

    expect(container).toMatchSnapshot()
  })

  test('with one normal and one bottom menu ', () => {
    const { container } = render(
      <TestSidebar>
        <Sidebar.Menu />
        <Sidebar.Menu bottom />
      </TestSidebar>
    )

    expect(container).toMatchSnapshot()
  })
})

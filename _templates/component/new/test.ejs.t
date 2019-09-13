---
to: src/components/<%= h.changeCase.pascalCase(name) %>/test.tsx
---
<%
  Name = h.changeCase.pascalCase(name)
-%>
import React, { ReactNode } from 'react'
/* eslint-disable-next-line */
import { render, fireEvent, cleanup } from '@testing-library/react'

import { OmitInternalProps } from '../Picasso'
import <%= Name %>, { Props } from './<%= Name %>'

const render<%= Name %> = (
  children: ReactNode,
  props: OmitInternalProps<Props>
) => {
  const { /* add props you need */ } = props

  return render(<<%= Name %>>{children}</<%= Name %>>)
}

afterEach(cleanup)

describe('<%= Name %>', () => {
  test('default render', () => {
    const { container } = render<%= Name %>(null, {})

    expect(container).toMatchSnapshot()
  })
})

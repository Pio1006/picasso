import React from 'react'
import { render, cleanup, RenderResult } from '@testing-library/react'
import Picasso from '@toptal/picasso-shared'

import Typography from '../Typography'
import Paper from './'

const renderPaper = (children: React.ReactNode) => {
  return render(
    <Picasso loadFonts={false}>
      <Paper>{children}</Paper>
    </Picasso>
  )
}

afterEach(cleanup)

describe('Paper', () => {
  let api: RenderResult

  beforeEach(() => {
    api = renderPaper(<Typography>This is Paper</Typography>)
  })
  test('default render', () => {
    const { container } = api

    expect(container).toMatchSnapshot()
  })
})
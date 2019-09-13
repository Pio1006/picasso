import React from 'react'
/* eslint-disable-next-line */
import { render, cleanup } from '@testing-library/react'

import Picasso, { OmitInternalProps } from '../Picasso'
import EnvironmentBanner, { Props } from './EnvironmentBanner'

const renderEnvironmentBanner = (props: OmitInternalProps<Props>) => {
  const { environment, productName } = props

  return render(
    <Picasso loadFonts={false}>
      <EnvironmentBanner environment={environment} productName={productName} />
    </Picasso>
  )
}

afterEach(cleanup)

describe('EnvironmentBanner', () => {
  test('development render', () => {
    const { container } = renderEnvironmentBanner({
      environment: 'development',
      productName: 'Picasso'
    })

    expect(container).toMatchSnapshot()
  })

  test('production render', () => {
    const { container } = renderEnvironmentBanner({
      environment: 'production',
      productName: 'Picasso'
    })

    expect(container).toMatchSnapshot()
  })
})

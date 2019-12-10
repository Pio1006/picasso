import React from 'react'
import { render, cleanup } from '@testing-library/react'

import FormField from './index'

const renderFormField = () => {
  return render(
    <FormField>
      <input />
    </FormField>
  )
}

afterEach(cleanup)

describe('FormField', () => {
  test('default render', () => {
    const { container } = renderFormField()

    expect(container).toMatchSnapshot()
  })
})
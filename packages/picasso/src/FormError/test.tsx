import React from 'react'
import { render, cleanup, RenderResult } from '@testing-library/react'
import Picasso, { OmitInternalProps } from '@toptal/picasso-shared'

import { Props } from './FormError'
import Form from '../Form'
import Input from '../Input'

const TestFormError = ({ children }: OmitInternalProps<Props>) => {
  return (
    <Picasso loadFonts={false}>
      <Form>
        <Form.Field>
          <Form.Label>Label:</Form.Label>
          <Input />
          <Form.Error>{children}</Form.Error>
          <Form.Hint>This is a hint</Form.Hint>
        </Form.Field>
      </Form>
    </Picasso>
  )
}

afterEach(cleanup)

describe('FormError', () => {
  let api: RenderResult

  beforeEach(() => {
    api = render(<TestFormError>My Error</TestFormError>)
  })
  test('default render', () => {
    const { container } = api

    expect(container).toMatchSnapshot()
  })
})
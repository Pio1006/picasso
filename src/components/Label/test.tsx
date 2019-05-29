import React from 'react'
import { render, fireEvent, cleanup, RenderResult } from 'react-testing-library'

import Picasso, { OmitInternalProps } from '../Picasso'
import Label, { Props } from './Label'

const renderLabel = (
  children: string,
  props: OmitInternalProps<Props, 'children'>
) => {
  const { onDelete } = props

  return render(
    <Picasso loadFonts={false}>
      <Label onDelete={onDelete}>{children}</Label>
    </Picasso>
  )
}

afterEach(cleanup)

test('renders default variant', () => {
  const { container } = renderLabel('Label', {})

  expect(container).toMatchSnapshot()
})

describe('dismissable label', () => {
  let onDelete: () => void
  let api: RenderResult

  beforeEach(() => {
    onDelete = jest.fn()
    api = renderLabel('Label', { onDelete })
  })
  test('should render dismissable label', () => {
    const { container } = api

    expect(container).toMatchSnapshot()
  })

  test('should fire onDelete event on dismiss action', () => {
    const { getByLabelText } = api
    const deleteIcon = getByLabelText('delete icon')

    fireEvent.click(deleteIcon)
    expect(onDelete).toHaveBeenCalled()
  })
})

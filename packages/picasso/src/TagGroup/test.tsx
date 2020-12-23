import React from 'react'
import { render } from '@toptal/picasso/test-utils'

import Tag from '../Tag'

const renderTagGroup = () => {
  return render(
    <Tag.Group>
      <Tag>Angular JS</Tag>
      <Tag>React JS</Tag>
      <Tag>Ember JS</Tag>
      <Tag>Vue JS</Tag>
    </Tag.Group>
  )
}

test('should render label group with 4 labels', () => {
  const { container } = renderTagGroup()

  expect(container).toMatchSnapshot()
})
import React, { ReactNode } from 'react'
import { render, RenderResult } from '@testing-library/react'
import Picasso from '@toptal/picasso-shared'

import Notification from '../Notification'

const renderNotificationActions = (children: ReactNode) => {
  return render(
    <Picasso loadFonts={false}>
      <Notification variant='green'>
        The time zone in your profile is set to (UTC -08:00) America - Los
        <Notification.Actions>{children}</Notification.Actions>
      </Notification>
    </Picasso>
  )
}

describe('NotificationActions', () => {
  let api: RenderResult

  beforeEach(() => {
    api = renderNotificationActions('Test')
  })

  test('default render', () => {
    const { container } = api

    expect(container).toMatchSnapshot()
  })
})

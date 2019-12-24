import React, { Fragment } from 'react'
import { render, fireEvent } from '@testing-library/react'
import Picasso from '@toptal/picasso-shared'

import { useNotifications } from './use-notifications'
import Button from '../../Button'

const TestComponent = () => {
  const { showError, showInfo, showSuccess } = useNotifications()

  return (
    <Fragment>
      <Button onClick={() => showError('Error message')}>Show Error</Button>
      <Button onClick={() => showInfo('Info message')}>Show Info</Button>
      <Button onClick={() => showSuccess('Success message')}>
        Show Success
      </Button>
    </Fragment>
  )
}

const renderNotification = () => {
  return render(
    <Picasso loadFonts={false}>
      <TestComponent />
    </Picasso>
  )
}

describe('useNotifications', () => {
  test('error notification render', () => {
    const { getByText, container } = renderNotification()
    const showErrorButton = getByText('Show Error')

    fireEvent.click(showErrorButton)

    expect(container).toMatchSnapshot()
  })

  test('info notification render', () => {
    const { getByText, container } = renderNotification()
    const showInfoButton = getByText('Show Info')

    fireEvent.click(showInfoButton)

    expect(container).toMatchSnapshot()
  })

  test('success notification render', () => {
    const { getByText, container } = renderNotification()
    const showSuccessButton = getByText('Show Success')

    fireEvent.click(showSuccessButton)

    expect(container).toMatchSnapshot()
  })
})

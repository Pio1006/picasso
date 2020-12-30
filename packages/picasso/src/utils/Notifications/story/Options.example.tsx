import React from 'react'
import { Button } from '@toptal/picasso'
import { useNotifications } from '@toptal/picasso/utils'

const Example = () => {
  const { showError } = useNotifications()

  return (
    <Button
      variant='secondary'
      onClick={() => {
        showError('Error message with custom options', undefined, {
          onClose: () => {
            console.log('Error notification closed!')
          },
          autoHideDuration: 1000
        })
      }}
    >
      Show error with custom options
    </Button>
  )
}

export default Example
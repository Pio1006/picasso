import React from 'react'
import { Button, ButtonProps } from '@toptal/picasso'
import { useFormState } from 'react-final-form'

// Intersection with the type { id?: string } is needed here because of
// TS compiler issue https://github.com/microsoft/TypeScript/issues/34793
export type Props = Omit<ButtonProps, 'type'> & {
  id?: string
}

export const SubmitButton = (props: Props) => {
  const { submitting } = useFormState()
  return (
    <Button
      type='submit'
      disabled={submitting}
      loading={submitting}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  )
}

SubmitButton.defaultProps = {}

SubmitButton.displayName = 'SubmitButton'

export default SubmitButton

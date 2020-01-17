import React, { useState, ChangeEventHandler } from 'react'
import { render, fireEvent } from '@testing-library/react'
import Picasso from '@toptal/picasso-shared'

import NumberInput, { Props as NumberInputProps } from './NumberInput'

const NumberInputRenderer = (
  props: { initialValue: number | string } & Partial<NumberInputProps>
) => {
  const [value, setValue] = useState(props.initialValue)

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.target.value)
  }

  return (
    <Picasso loadFonts={false}>
      <NumberInput
        step={5}
        max={100}
        min={-100}
        value={value}
        onChange={handleChange}
      />
    </Picasso>
  )
}

const renderNumberInput = (
  props: Partial<NumberInputProps> & { initialValue?: number | string } = {}
) => {
  const { initialValue = '10' } = props

  return render(<NumberInputRenderer initialValue={initialValue} {...props} />)
}

test('regular', () => {
  const { container } = renderNumberInput()

  expect(container.firstChild).toMatchSnapshot()
})

test('increase value', async () => {
  const { getByDisplayValue, queryAllByRole } = renderNumberInput()

  const input = getByDisplayValue('10') as HTMLInputElement

  const controls = queryAllByRole('button')
  const controlUp = controls[0]

  fireEvent.click(controlUp)

  expect(input.value).toBe('15')
})

test('decrease value', () => {
  const { getByDisplayValue, queryAllByRole } = renderNumberInput()

  const input = getByDisplayValue('10') as HTMLInputElement

  const controls = queryAllByRole('button')
  const controlDown = controls[1]

  fireEvent.click(controlDown)

  expect(input.value).toBe('5')
})

describe('near max/min limits', () => {
  test('increase value near max limit', () => {
    const { getByDisplayValue, queryAllByRole } = renderNumberInput({
      initialValue: '97'
    })

    const input = getByDisplayValue('97') as HTMLInputElement

    const controls = queryAllByRole('button')
    const controlUp = controls[0]

    fireEvent.click(controlUp)

    expect(input.value).toBe('100')
  })

  test('decrease value near min limit', () => {
    const { getByDisplayValue, queryAllByRole } = renderNumberInput({
      initialValue: '-97'
    })

    const input = getByDisplayValue('-97') as HTMLInputElement

    const controls = queryAllByRole('button')
    const controlDown = controls[1]

    fireEvent.click(controlDown)

    expect(input.value).toBe('-100')
  })

  test('decrease value when it is closer than step to max', () => {
    const { getByDisplayValue, queryAllByRole } = renderNumberInput({
      initialValue: '97'
    })

    const input = getByDisplayValue('97') as HTMLInputElement

    const controls = queryAllByRole('button')
    const controlDown = controls[1]

    fireEvent.click(controlDown)

    expect(input.value).toBe('95')
  })

  test('increase value when it is closer to min than step', () => {
    const { getByDisplayValue, queryAllByRole } = renderNumberInput({
      initialValue: '-97'
    })

    const input = getByDisplayValue('-97') as HTMLInputElement

    const controls = queryAllByRole('button')
    const controlUp = controls[0]

    fireEvent.click(controlUp)

    expect(input.value).toBe('-95')
  })
})
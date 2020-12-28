import React, { useState, ChangeEvent } from 'react'
import { Select, Form, Container, NumberInput } from '@toptal/picasso'
import { mount } from '@cypress/react'
import { TestingPicasso } from '@toptal/picasso/test-utils'

const SelectSearchBehaviourExample = () => {
  const [value, setValue] = useState<string>()
  const [threshold, setTreshold] = useState(4)

  const handleChange = (
    event: ChangeEvent<{
      name?: string
      value: string
    }>
  ) => {
    setValue(event.target.value)
  }

  const handleTresholdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTreshold(parseInt(event.target.value, 10))
  }

  return (
    <TestingPicasso>
      <Container flex>
        <Container right='small'>
          <Form.Field>
            <Form.Label>Search for an option</Form.Label>
            <Select
              onChange={handleChange}
              value={value}
              options={OPTIONS}
              placeholder='Choose an option...'
              width='auto'
              searchThreshold={threshold}
              data-testid='select'
            />
          </Form.Field>
        </Container>
        <Container>
          <Form.Field>
            <Form.Label>Search threshold</Form.Label>
            <NumberInput
              value={threshold}
              onChange={handleTresholdChange}
              data-testid='input-threshold'
            />
          </Form.Field>
        </Container>
      </Container>
    </TestingPicasso>
  )
}

const OPTIONS = [
  { value: '1', text: 'Option 1' },
  { value: '2', text: 'Option 2' },
  { value: '3', text: 'Option 3' },
  { value: '4', text: 'Option 4' },
  { value: '5', text: 'Option 5' }
]

const openSelectWithTab = () => {
  cy.get('body').tab()
}

const setThresholdToHideSelectSearch = () => {
  cy.get('[data-testid=input-threshold]')
    .type('{backspace}')
    .type('6')
}

describe('Select', () => {
  it('focuses Select with and without a search', () => {
    mount(<SelectSearchBehaviourExample />)

    openSelectWithTab()

    cy.get('[role=menu]').should('not.be.visible')

    setThresholdToHideSelectSearch()

    openSelectWithTab()
    cy.get('[role=menu]').should('not.be.visible')

    cy.get('[data-testid=select]').type(' ')
    cy.get('[role=menu]').should('be.visible')
  })
})

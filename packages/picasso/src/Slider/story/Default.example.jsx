import React from 'react'
import { Container, Slider } from '@toptal/picasso'

const SelectDefaultExample = () => {
  const handleChange = (event, value) => {
    window.console.log('onChange: ', value)
  }

  return (
    <Container>
      <Slider onChange={handleChange} />
    </Container>
  )
}

export default SelectDefaultExample
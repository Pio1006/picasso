import React, { useState } from 'react'
import { MonthSelect } from '@toptal/picasso'

const Example = () => {
  const [selectedOption, setSelectedOption] = useState()

  const onChange = e => {
    setSelectedOption(e.target.value)
  }

  return (
    <MonthSelect
      width='auto'
      placeholder='Select month'
      onChange={onChange}
      value={selectedOption}
    />
  )
}

export default Example

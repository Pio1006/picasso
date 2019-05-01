import React from 'react'
import styled from 'styled-components'
import { screens, palette } from '@toptal/picasso/utils'

const StyledBox = styled.div`
  background-color: ${palette.success.main};
  padding: 2em;

  ${screens('small', 'medium')} {
    background-color: ${palette.primary.main};
  }
`

const MediaQueriesExample = () => (
  <StyledBox>Box will become blue on small and medium screen sizes</StyledBox>
)

export default MediaQueriesExample

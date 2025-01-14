import React from 'react'
import { Container, Typography, Badge } from '@toptal/picasso'

const Example = () => (
  <>
    <Container>
      <Typography variant='heading' size='small'>
        Small:
      </Typography>
    </Container>
    <Container top='small' bottom='medium'>
      <Badge content='2' variant='red' size='small' />
    </Container>

    <Container>
      <Typography variant='heading' size='small'>
        Medium:
      </Typography>
    </Container>
    <Container top='small'>
      <Badge content='200' variant='red' size='medium' />
    </Container>
  </>
)

export default Example

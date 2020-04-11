import React from 'react'
import { 
  Box,
  Container,
  Typography,
} from '@material-ui/core'

const SampleElementDiv = (props: { color?: string, }) => {
  let { color } = props
  if (color === undefined) {
    color = '#cfe8fc'
  }
  return (
    <Typography component="div" style={{ backgroundColor: color, height: '10vh' }} />
  )
}

const SampleElementSpan = () => {
  return (
    <Box component="span" m={2} textAlign="center" bgcolor='#f8f8f8'>
      Center
    </Box>
  )
}

export const ContainerSample = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <SampleElementSpan />
        <SampleElementSpan />
      </Container>
      <Container maxWidth="sm">
        <SampleElementDiv {...{color: '#ffe8ff'}}/>
      </Container>
      <Container fixed>
        <SampleElementDiv {...{}}/>
      </Container>
    </div>
  )
}

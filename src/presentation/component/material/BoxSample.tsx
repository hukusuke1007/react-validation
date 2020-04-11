import React from 'react'
import { 
  Box,
} from '@material-ui/core'

export const BoxSample = () => {
  return (
    <div>
      <Box 
        component="div" 
        m={2} 
        p={1}
        textAlign="center"
        bgcolor='#f8f8f8'>
          Center
      </Box>
    </div>
  )
}

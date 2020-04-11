import React from 'react'
import { 
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles'
import { 
  Box,
  Button,
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => createStyles({
  botton_root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 32,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
}))

export const ButtonSample = () => {
  const classes = useStyles()
  return (
    <div>
      <Box component="span" m={1}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => {
            console.log('click')
          }}>
          Hello World
        </Button>
      </Box>
      <Box component="span" m={1}>
        <Button 
          classes={{
            root: classes.botton_root, // class name, e.g. `classes-nesting-root-x`
            label: classes.label, // class name, e.g. `classes-nesting-label-x`
          }}
          onClick={() => {
            console.log('click')
          }}>
          Hello World
        </Button>
      </Box>
    </div>
  )
}

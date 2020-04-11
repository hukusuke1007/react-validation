import React from 'react'
import '../../App.css'
import { makeStyles } from '@material-ui/core/styles'
import { 
  Box,
  Button,
} from '@material-ui/core'

/** MaterialUIのcssのカスタマイズができる */
const useStyles = makeStyles({
  root: {
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
})
/**
 * https://material-ui.com/ja/getting-started/usage/
 */
export const Material = () => {
  const classes = useStyles()
  return (
    <div className='App'>
      <h1>Aboutページ</h1>
      <div>
        {/* *
          * Box 
          * パラメータは省略できる
          * https://material-ui.com/system/api/
          * */}
        <Box 
          component="div" 
          m={2} 
          p={1}
          textAlign="center"
          bgcolor='#f8f8f8'>
            Center
        </Box>
      </div>
      <div>
        {/* ボタン */}
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
              root: classes.root, // class name, e.g. `classes-nesting-root-x`
              label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }}
            onClick={() => {
              console.log('click')
            }}>
            Hello World
          </Button>
        </Box>
      </div>
    </div>
  )
}

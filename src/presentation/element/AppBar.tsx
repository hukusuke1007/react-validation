import React from 'react'
import {
  AppBar,
  Toolbar,
} from '@material-ui/core'

type Prop = {
  // style?: React.CSSProperties,
}

export const CustomAppBar: React.FC<Prop> = ({ children, ...props }, ) => {
  return (
    <AppBar position="static">
      <Toolbar>
        {children}
      </Toolbar>
    </AppBar>
  )
}
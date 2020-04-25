import React from 'react'
import {
  AppBar,
  Toolbar,
} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useTheme } from '../theme/ThemeContext'

const lightBgColor = '#DEE2EB' // rgba(222, 226, 235)
const darkBgColor = '#040507' // rgba(4, 5, 7)
const whiteColor = '#FFF'
const blackColor = '#000'
const lightShadowColor1 = 'rgba(255,255,255, .7)'
const lightShadowColor2 = 'rgba(55, 84, 170, .15)'
const darkShadowColor1 = 'rgba(76, 78, 90, .9)' 
const darkShadowColor2 = 'rgba(76, 78, 90, .2)'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBarLight: {
      padding: 0,
      background: lightBgColor,
      boxShadow: 'none',
    },
    appBarDark: {
      padding: 0,
      background: darkBgColor,
      boxShadow: 'none',
    },
    toolBarLight: {
      borderRadius: 0,
      color: blackColor,
      background: `linear-gradient(135deg, rgba(222, 226, 235, .8), rgba(222, 226, 235, .5))`,
      boxShadow: `-3px -2px 4px ${lightShadowColor1}, 3px 4px 10px ${lightShadowColor2}`,
    },
    toolBarDark: {
      borderRadius: 0,
      color: whiteColor,
      background: `linear-gradient(135deg, ${darkShadowColor2}, ${darkShadowColor1}, ${darkBgColor})`,
      boxShadow: `-1px -1px 1px ${darkShadowColor1}, 3px 3px 10px ${blackColor}`,
    },
  }),
);

type Prop = {
  // style?: React.CSSProperties,
}

export const CustomAppBar: React.FC<Prop> = ({ children, ...props }, ) => {
  const { colorMode } = useTheme()
  const classes = useStyles()
  const appBar = colorMode === 'light' ? classes.appBarLight : classes.appBarDark
  const toolBar = colorMode === 'light' ? classes.toolBarLight : classes.toolBarDark
  return (
    <AppBar position='static' className={appBar} color='transparent'>
      <Toolbar className={toolBar}>
        {children}
      </Toolbar>
    </AppBar>
  )
}
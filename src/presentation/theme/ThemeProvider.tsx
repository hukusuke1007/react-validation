import React, { useState } from 'react'
import { ThemeProvider as EmotionProvider } from 'emotion-theming'
import { ThemeContext } from './ThemeContext'
import { getTheme } from './Theme'
import {
  ColorMode,
 } from './Types'

const ThemeProvider: React.FC = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorMode>('dark')

  function toggleColorMode() {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }
  return (
    <EmotionProvider theme={getTheme(colorMode)}>
      <ThemeContext.Provider
        value={{
          colorMode,
          setColorMode: toggleColorMode,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionProvider>
  )
}

export default ThemeProvider
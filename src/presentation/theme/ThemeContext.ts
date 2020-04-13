import { createContext, useContext } from 'react'
import { ColorMode, } from './Types'

interface ThemeContextType {
  colorMode: ColorMode;
  setColorMode: () => void;
}

const defaultContext: ThemeContextType = {
  colorMode: 'light',
  setColorMode: () => {}, 
}

export const ThemeContext = createContext<ThemeContextType>(defaultContext)
export const useTheme = () => useContext(ThemeContext)
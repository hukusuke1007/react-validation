import {
  ColorMode,
  Theme,
 } from './Types'

export const lightTheme: Theme = {
  background: '#ffffff',
  color: '#000000',
}

export const darkTheme: Theme = {
  background: '#222639',
  color: '#f0f5fa',
}

export function getTheme(colorMode: ColorMode): Theme {
  switch (colorMode) {
    case 'light':
      return lightTheme
    case 'dark':
      return darkTheme
    default:
      return lightTheme
  }
}
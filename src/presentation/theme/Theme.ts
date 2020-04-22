import {
  ColorMode,
  Theme,
 } from './Types'

export const lightTheme: Theme = {
  background: '#DEE2EB',
  color: '#000000',
  linkFontColor: '#666',
  mode: 'light',
}

export const darkTheme: Theme = {
  background: '#040507',
  color: '#f0f5fa',
  linkFontColor: '#fff',
  mode: 'dark',
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
import { useContext } from 'react'
import { Dimensions, Platform } from 'react-native'
import { ThemeContext } from 'styled-components'

const colors = {
  green: '#1ED760',
  black: '#121212',
  lightBlack: '#253044',
  gray: '#797979',
  white: '#FFFEFF'
}

const { width, height } = Dimensions.get('window')

export const device = {
  width,
  height,
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android'
}

const theme = {
  colors,
  device
}

export type Theme = typeof theme;

export default theme as Theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const useTheme = () => useContext(ThemeContext)

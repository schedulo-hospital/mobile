import {DefaultTheme} from 'styled-components/native'

interface Colors {
  background: string
  primary: string
  card: string
  text: string
  border: string
  notification: string
  button: string
  inputBackground: string

  info: string
  warning: string
  danger: string
  success: string
  neutral: string

  buttons: {
    selected: string
    normal: string
  }

  forms: {
    value: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    dark: boolean
    colors: Colors
  }
}

export default DefaultTheme

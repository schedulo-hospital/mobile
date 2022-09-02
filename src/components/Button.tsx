import React from 'react'
import {ButtonProps} from 'react-native'

import * as s from './Button.styled'

const Button = (props: ButtonProps) => {
  return <s.Button {...props} />
}

export default Button

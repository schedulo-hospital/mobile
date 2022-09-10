import React from 'react'
import {TextInputProps} from 'react-native'

import * as s from './TextInput.styled'

const TextInput = (props: TextInputProps) => {
  return <s.TextInput autoCapitalize="none" autoCorrect={false} {...props} />
}

export default TextInput

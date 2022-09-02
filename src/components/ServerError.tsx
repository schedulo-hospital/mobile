import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import {CombinedError} from 'urql'

const ServerError = ({error}: {error: CombinedError}) => {
  return (
    <SafeAreaView>
      <Text>Oh no... {error.message}</Text>
    </SafeAreaView>
  )
}

export default ServerError

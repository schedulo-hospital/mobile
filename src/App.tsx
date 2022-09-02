import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import {Provider} from 'urql'
import {client} from './gql/client'
import Home from './screens/Home'

const App = () => {
  return (
    <Provider value={client}>
      <SafeAreaView>
        <Text
          style={{
            marginTop: 40,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Schedulo
        </Text>
        <Home />
      </SafeAreaView>
    </Provider>
  )
}

export default App

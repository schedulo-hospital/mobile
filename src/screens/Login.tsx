import React from 'react'
import {Button, SafeAreaView, Text} from 'react-native'
import {setRoot} from 'react-native-navigation-hooks'
import {mainRoot} from '../App'
import Routes from './Routes'

const Login = () => {
  return (
    <SafeAreaView>
      <Text
        style={{
          marginTop: 40,
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Schedulo login
      </Text>
      <Button
        title="Login"
        onPress={() => {
          setRoot(mainRoot)
        }}
      />
    </SafeAreaView>
  )
}

Login.screenName = Routes.LOGIN

export default Login

import React from 'react'
import {SafeAreaView} from 'react-native'
import {setRoot} from 'react-native-navigation-hooks'
import {mainRoot} from '../App'
import Routes from './Routes'
import Button from '../components/Button'
import Title from '../components/Title'

const Login = () => {
  return (
    <SafeAreaView>
      <Title>Schedulo login</Title>
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

import React from 'react'
import {Alert, SafeAreaView} from 'react-native'
import {setRoot} from 'react-native-navigation-hooks'
import {mainRoot} from '../App'
import Routes from './Routes'
import Button from '../components/Button'
import Title from '../components/Title'
import TextInput from '../components/TextInput'
import {useLoginMutation} from '../gql/generatedTypes'
import RNSInfo from 'react-native-sensitive-info'
import {TOKEN_KEY} from '../gql/client'

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [, loginMutation] = useLoginMutation()

  const login = async () => {
    console.log('wf')

    const response = await loginMutation({
      input: {
        email,
        password,
      },
    })

    if (response.data?.login?.token) {
      await RNSInfo.setItem(TOKEN_KEY, response.data.login.token, {})
      setRoot(mainRoot)
    }

    if (response.error) {
      console.log('chybka')
      Alert.alert('Chyba...')
    }
  }

  return (
    <SafeAreaView>
      <Title>Schedulo login</Title>
      <TextInput onChangeText={text => setEmail(text)} value={email} />
      <TextInput
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />

      <Button title="Login" onPress={login} />
    </SafeAreaView>
  )
}

Login.screenName = Routes.LOGIN

export default Login

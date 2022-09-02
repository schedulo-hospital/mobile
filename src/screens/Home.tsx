import React from 'react'
import {Button, SafeAreaView, Text} from 'react-native'
import {useCurrentUserQuery} from '../gql/generatedTypes'
import Routes from './Routes'
import {setRoot} from 'react-native-navigation-hooks'
import {loginRoot} from '../App'

const Home = () => {
  const [{data, fetching, error}] = useCurrentUserQuery()

  if (error) {
    return (
      <SafeAreaView>
        <Text>Oh no... {error.message}</Text>
      </SafeAreaView>
    )
  }

  if (fetching) {
    return (
      <SafeAreaView>
        <Text>loading...</Text>
      </SafeAreaView>
    )
  }

  return (
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
      <Text>{data?.currentUser?.name}</Text>
      <Button
        title="Logout"
        onPress={() => {
          setRoot(loginRoot)
        }}
      />
    </SafeAreaView>
  )
}

Home.screenName = Routes.HOME

export default Home

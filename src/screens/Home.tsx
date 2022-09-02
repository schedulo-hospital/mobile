import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import {useCurrentUserQuery} from '../gql/generatedTypes'

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

  return <Text>{data?.currentUser?.name}</Text>
}

export default Home

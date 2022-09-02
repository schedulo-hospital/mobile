import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import {useCurrentUserQuery} from '../gql/generatedTypes'
import Routes from './Routes'
import {setRoot} from 'react-native-navigation-hooks'
import {loginRoot} from '../App'
import Button from '../components/Button'
import Loading from '../components/Loading'
import ServerError from '../components/ServerError'
import Title from '../components/Title'

const Home = () => {
  const [{data, fetching, error}] = useCurrentUserQuery()

  return (
    <SafeAreaView>
      <Title>Schedulo</Title>
      {fetching && <Loading />}
      {error && <ServerError error={error} />}

      {data && (
        <>
          <Text>{data?.currentUser?.name}</Text>
          <Button
            title="Logout"
            onPress={() => {
              setRoot(loginRoot)
            }}
          />
        </>
      )}
    </SafeAreaView>
  )
}

Home.screenName = Routes.HOME

export default Home

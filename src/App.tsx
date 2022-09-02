import React from 'react'
import {Provider} from 'urql'
import {client, TOKEN_KEY} from './gql/client'

import {Navigation} from 'react-native-navigation'
import {NavigationProvider} from 'react-native-navigation-hooks'
import {registerScreens} from 'react-native-navigation-register-screens'
import {ThemeProvider} from 'styled-components/native'
import RNSInfo from 'react-native-sensitive-info'
import Routes from './screens/Routes'

import Home from './screens/Home'
import Login from './screens/Login'
import {theme} from './theme'

registerScreens([Home, Login], Component => (props: any) => {
  return (
    <NavigationProvider value={{componentId: props.componentId}}>
      <ThemeProvider theme={theme}>
        <Provider value={client}>
          <Component {...props} />
        </Provider>
      </ThemeProvider>
    </NavigationProvider>
  )
})

export const loginRoot = {
  root: {
    component: {
      name: Routes.LOGIN,
    },
  },
}

export const mainRoot = {
  root: {
    component: {
      name: Routes.HOME,
    },
  },
}

Navigation.events().registerAppLaunchedListener(async () => {
  const token = await RNSInfo.getItem(TOKEN_KEY, {})

  await Navigation.setRoot(token ? mainRoot : loginRoot)
})

import {
  CombinedError,
  createClient,
  fetchExchange,
  makeOperation,
  Operation,
} from 'urql'
import {authExchange} from '@urql/exchange-auth'
import RNSInfo from 'react-native-sensitive-info'

export const TOKEN_KEY = 'TOKEN'

const getAuth = async ({authState}: {authState: any}) => {
  if (!authState) {
    const token = await RNSInfo.getItem(TOKEN_KEY, {})
    if (token) {
      return {token}
    }

    return null
  }

  // possibly logout user or user refresh token

  return null
}

const addAuthToOperation = ({
  authState,
  operation,
}: {
  authState: any
  operation: Operation
}) => {
  if (!authState || !authState.token) {
    return operation
  }

  const fetchOptions =
    typeof operation.context.fetchOptions === 'function'
      ? operation.context.fetchOptions()
      : operation.context.fetchOptions || {}

  return makeOperation(operation.kind, operation, {
    ...operation.context,
    fetchOptions: {
      ...fetchOptions,
      headers: {
        ...fetchOptions.headers,
        Authorization: `Bearer ${authState.token}`,
      },
    },
  })
}

const didAuthError = ({error}: {error: CombinedError}) => {
  return error.graphQLErrors.some(e => e.extensions?.code === 'FORBIDDEN')
}

export const client = createClient({
  url: 'http://192.168.100.247:8080/graphql',
  exchanges: [
    authExchange({
      getAuth,
      addAuthToOperation,
      didAuthError,
    }),
    fetchExchange,
  ],
})

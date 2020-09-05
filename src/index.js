import React from 'react'
import reactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import App from './app'

const appDOM = document.getElementById('app')

const client = new ApolloClient({
  uri: 'https://bet-server.vercel.app/graphql'
})

reactDOM.render(
  <ApolloProvider client={client}><App /></ApolloProvider>
  , appDOM)

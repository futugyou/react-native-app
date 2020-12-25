import React from 'react'
import Main from './src/components/Main'
import { NativeRouter } from 'react-router-native'
import { ApollProvider } from '@apollo/react-hooks'
import createApolloClient from './src/utils/apolloClient'
import Constants from 'expo-components'

const apolloClient = createApolloClient()

const App = () => {
    console.log(Constants.manifest)
    return (
        <NativeRouter>
            <ApollProvider client={apolloClient}>
                <Main></Main>
            </ApollProvider>
        </NativeRouter>
    )
}

export default App
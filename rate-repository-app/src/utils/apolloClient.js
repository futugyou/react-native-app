import ApollClient from 'apollo-boost'

const createApolloClient = () => {
    return new ApollClient({
        uri: 'http://10.0.0.4:5000/graphql'
    })
}

export default createApolloClient
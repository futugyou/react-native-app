import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'

const styles = StyleSheet.create({
    separator: {
        height: 10
    }
})
const renderItem = ({ item }) => (
    <RepositoryItem title={item.fullName} />
)

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
    const { repositories } = useRepositories()
    const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : []

    return (
        <FlatList
            renderItem={renderItem}
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={item => item.id}>
        </FlatList>
    )
}

export default RepositoryList
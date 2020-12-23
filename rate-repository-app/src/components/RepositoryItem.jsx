import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
})
const RepositoryItem = ({ title }) => (
    <View style={styles.item}  >
        <Text style={styles.title}>{title}</Text>
    </View>
)

export default RepositoryItem
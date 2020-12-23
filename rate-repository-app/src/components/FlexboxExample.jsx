import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex'
    },
    flexItemA: {
        flexGrow: 0,
        backgroundColor: 'green'
    },
    flexItemB: {
        flexGrow: 1,
        backgroundColor: 'blue'
    }
})

const FlexboxExample = () => {
    return (
        <View style={styles.flexContainer}>
            <View style={styles.flexItemA}>
                <Text>Flex item a</Text>
            </View>
            <View style={styles.flexItemB}>
                <Text>Flex item b</Text>
            </View>
        </View>
    )
}

export default FlexboxExample
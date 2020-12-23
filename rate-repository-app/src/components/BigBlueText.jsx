import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    constainer: {
        padding: 20
    },
    text: {
        color: 'blue',
        fontSize: 24,
        fontWeight: '700'
    }
})

const BigBlueText = () => {
    return (
        <View style={styles.constainer}>
            <Text style={styles.text}>
                BigBlueText
                </Text>
        </View>
    )
}

export default BigBlueText
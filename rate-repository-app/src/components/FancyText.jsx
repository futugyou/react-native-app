import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    text: {
        color: 'grey',
        fontSize: 14
    },
    blueText: {
        color: 'blue',
    },
    bigText: {
        fontSize: 24,
        fontWeight: '700',
    },
})

const FancyText = ({ IsBlue, isBig, children }) => {
    const textStyle = [
        styles.text,
        IsBlue && styles.blueText,
        isBig && styles.bigText
    ]
    return <Text style={textStyle}>{children}</Text>
}

export default FancyText
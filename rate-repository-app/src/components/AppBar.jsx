import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import Constants from 'expo-constants'
import SignIn from './SignIn'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#24292e'
    }
})

const AppBar = () => {
    return (
        <TouchableWithoutFeedback style={styles.container}>
            <View style={styles.container}>
                <Text>reposityory</Text>
                <SignIn></SignIn>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default AppBar
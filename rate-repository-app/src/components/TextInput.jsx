/* eslint-disable no-unused-vars */
import React from 'react'
import { TextInput as NativeTextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({

})

const TextInput = ({ style, error, ...props }) => {
    const textinputstyle = [style]
    return <NativeTextInput style={textinputstyle}{...props}></NativeTextInput>
}

export default TextInput
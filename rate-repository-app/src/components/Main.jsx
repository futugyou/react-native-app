import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import RepositoryList from './RepositoryList'
import BigBlueText from './BigBlueText'
import FancyText from './FancyText'
import Text from './Text'
import FlexboxExample from './FlexboxExample'
import AppBar from './AppBar'
import { Route, Switch, Redirect, Link } from 'react-router-native'


const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
    }
})

const Main = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <AppBar>            </AppBar>
                <Switch>
                    <Route path="/" exact>
                        <RepositoryList></RepositoryList>
                    </Route>
                    <Redirect to="/"></Redirect>
                </Switch>
                <FlexboxExample></FlexboxExample>
                <FancyText>one</FancyText>
                <FancyText IsBlue>two</FancyText>
                <FancyText isBig>three</FancyText>
                <FancyText isBig IsBlue>four</FancyText>
                <BigBlueText></BigBlueText>
                <Text>Rate repository application</Text>
                <Text style={{ paddingBottom: 10 }}>Text with custom <style></style></Text>
                <Text fontWeight="bold" fontSize="subheading">Bold subheading</Text>
                <Text color="textSecondary">Text with secondary color</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Main
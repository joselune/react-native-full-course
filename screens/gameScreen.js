import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TitleComponent } from './components/title'

export const GameScreen = ({ numberPicked }) => {
    return (
        <View styles={styles.screen}>
            <TitleComponent>
                Oponent Guess
            </TitleComponent>
            <View>
                <Text>Higher or lower</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        backgroundColor: "blue"
    },
})

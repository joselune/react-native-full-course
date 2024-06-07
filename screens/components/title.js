import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Colors from '../../constants/colors'

export const TitleComponent = ({ children }) => {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12
    }
})
import React from 'react'
import { StyleSheet, Text } from 'react-native'

export const TitleComponent = ({ children }) => {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4e0329',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#4e0329',
        padding: 12
    }
})
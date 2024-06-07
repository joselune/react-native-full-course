import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/colors'

export const PrimaryButton = (props) => {
    const { onPress, children } = props
    return (
        <View >
            <View style={styles.buttonOuter}>
                <Pressable
                    onPress={onPress}
                    style={({ pressed }) => pressed ? [styles.buttonStyle, styles.pressed] : styles.buttonStyle}
                    android_ripple={{ color: Colors.primary600 }}
                >
                    <Text style={styles.buttonText}>{children}</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuter: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonStyle: {
        backgroundColor: Colors.primary600,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})
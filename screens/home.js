import React from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import { PrimaryButton } from './components/primaryButton';

export function Home({ pickNumber }) {
    const [enteredNumber, setEnteredNumber] = React.useState('')

    const setEnteredNumberValue = (text) => {
        setEnteredNumber(text)
    }

    const resetInputHandler = () => {
        setEnteredNumber('')
    }
    const showAlert = (title, subtitle, callback) => {
        Alert.alert(title, subtitle,
            [{ text: 'Okay', style: 'destructive', onPress: callback }]
        )
    }
    const confirmInputHandler = () => {
        const choosenNumber = parseInt(enteredNumber)
        if (isNaN(choosenNumber) || choosenNumber <= 0 && choosenNumber > 99) {
            showAlert("Not a number", "Number should be between 1 and 99", resetInputHandler)
            return
        }

        pickNumber(choosenNumber)

    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                value={enteredNumber}
                style={styles.numberInput}
                onChangeText={text => setEnteredNumberValue(text)}
                maxLength={2}
                keyboardType='number-pad' />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler} >Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 20,
        padding: 16,
        backgroundColor: '#4e0329',
        borderRadius: 8,
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});

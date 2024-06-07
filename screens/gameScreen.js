import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { TitleComponent } from './components/title'
import { NumberContainer } from './components/numberContainer'
import { PrimaryButton } from './components/primaryButton'

function generateRandomBetwen(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if (rndNum === exclude) {
        return generateRandomBetwen(min, max, exclude)
    }
    else {
        return rndNum
    }
}
let minBoundary = 1
let maxBoundary = 100

export const GameScreen = ({ numberPicked, gameOver }) => {

    const initalGuess = generateRandomBetwen(1, 100, numberPicked)
    const [currentGuess, setCurrentGuess] = React.useState(initalGuess)

    React.useEffect(() => {
        if (currentGuess + 1 == numberPicked) {
            gameOver(true)
        }
    }, [currentGuess])

    const nextGuessHandler = (direction) => {
        if ((direction == 'low' && currentGuess < numberPicked) || (direction == 'up' && currentGuess > numberPicked)) {
            Alert.alert("Lier", "is wrong", [{ text: 'sorry', style: 'cancel' }])
            return
        }
        if (direction == 'up') {
            minBoundary = currentGuess
        }
        if (direction == 'low') {
            maxBoundary = currentGuess
        }

        let number = generateRandomBetwen(minBoundary, maxBoundary, numberPicked)
        setCurrentGuess(number)
    }
    return (
        <View>
            <View style={styles.screen} >

                <TitleComponent>
                    Oponent Guess
                </TitleComponent>
                <NumberContainer>
                    {currentGuess}
                </NumberContainer>
                <View>
                    <Text>Higher or lower</Text>
                    <View>
                        <PrimaryButton onPress={() => nextGuessHandler('up')}>
                            +
                        </PrimaryButton>
                        <PrimaryButton onPress={() => nextGuessHandler('low')}>
                            -
                        </PrimaryButton>
                    </View>
                </View>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 10
    },
})

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, StatusBar as rnStatusBar } from 'react-native';
import { Home } from './screens/home';
import { LinearGradient } from 'expo-linear-gradient';
import { GameScreen } from './screens/gameScreen';
import Colors from './constants/colors';
import { GameOver } from './screens/gameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOVer] = useState(false)
  const pickedNumberHandler = (pickedNumeber) => {
    setUserNumber(pickedNumeber)
    setGameIsOVer(false)
  }

  const setGameIsOVerValue = (isOver) => {
    setGameIsOVer(isOver)
  }

  let screen = <Home pickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen numberPicked={userNumber} gameOver={setGameIsOVerValue} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOver />
  }

  return (
    <LinearGradient colors={[Colors.primary700, '#ddb52f']} style={styles.viewContainer}>
      <SafeAreaView style={styles.AndroidSafeArea}>
        {screen}
      </SafeAreaView>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? rnStatusBar.currentHeight : 0
  }
});
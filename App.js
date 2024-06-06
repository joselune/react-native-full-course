import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, } from 'react-native';
import { Home } from './screens/home';
import { LinearGradient } from 'expo-linear-gradient';
import { GameScreen } from './screens/gameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const pickedNumberHandler = (pickedNumeber) => {
    setUserNumber(pickedNumeber)
  }

  let screen = <Home pickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen numberPicked={userNumber} />
  }

  return (
    <LinearGradient colors={["#ddb52f", '#ddb52f']} style={styles.viewContainer}>
      {screen}
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  }
});
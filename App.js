import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, StatusBar as rnStatusBar } from 'react-native';
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
      <SafeAreaView style={styles.AndroidSafeArea}>
        {screen}
      </SafeAreaView>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? rnStatusBar.currentHeight : 0
  }
});
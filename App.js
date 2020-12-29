import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Home from './components/Home';
import AppLoading from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
  'Pacifico-Regular': require('./assets/font/Pacifico-Regular.ttf')
})

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return (
      <Home />
    )
  }

  else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    )
  }

}

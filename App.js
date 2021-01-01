import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Home from './screens/Home';


const getFonts = () => Font.loadAsync({
  'Pacifico-Regular': require('./assets/font/Pacifico-Regular.ttf'),
  'CrimsonText-SemiBold': require('./assets/font/CrimsonText-SemiBold.ttf'),
  'LibreBaskerville-Bold': require('./assets/font/LibreBaskerville-Bold.ttf')
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

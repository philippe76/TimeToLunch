import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Home from './screens/Home';
import Order from './screens/Order';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderTabs from './components/HeaderTabs';

const getFonts = () => Font.loadAsync({
  'Pacifico-Regular': require('./assets/font/Pacifico-Regular.ttf'),
  'CrimsonText-SemiBold': require('./assets/font/CrimsonText-SemiBold.ttf'),
  'LibreBaskerville-Bold': require('./assets/font/LibreBaskerville-Bold.ttf')
})

// const Stack = createStackNavigator();


export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return (
          <PaperProvider>
            
            <NavigationContainer>
            <HeaderTabs />
              {/* <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                  name="Home" 
                  component={Home}                 
                />
                <Stack.Screen name="Order" component={Order} />
              </Stack.Navigator> */}
            </NavigationContainer>
          </PaperProvider>
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

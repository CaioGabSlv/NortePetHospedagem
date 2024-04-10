import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { useFonts } from "expo-font";

import Home from './src/NavigationScreens1/Home';
import IntroScreen from './src/NavigationScreens1/IntroScreen';
import IntroScreen3 from './src/NavigationScreens1/IntroScreen3';
import IntroScreen2 from './src/NavigationScreens1/IntroScreen2';

const Stack = createNativeStackNavigator();

export default function NortePetHospedagem() {
  const [fontsLoaded] = useFonts({
    "LeckerliOneRegular": require("./assets/fonts/LeckerliOneRegular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="IntroScreen"
          component={IntroScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="IntroScreen2"
          component={IntroScreen2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="IntroScreen3"
          component={IntroScreen3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
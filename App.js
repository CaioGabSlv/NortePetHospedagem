import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/NavigationScreens1/Home';
import IntroScreen from './src/NavigationScreens1/IntroScreen';

const Stack = createNativeStackNavigator();

export default function NortePetHospedagem () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="IntroScreen"
          component={IntroScreen}
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
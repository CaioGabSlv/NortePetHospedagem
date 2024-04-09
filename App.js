import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/NavigationScreens1/Home';
import IntroScreen from './src/NavigationScreens1/IntroScreen';
import Login from './src/NavigationScreens1/Login';

const Stack = createNativeStackNavigator();

export default function NortePetHospedagem () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login}
        />
      <Stack.Screen
          name="IntroScreen"
          component={IntroScreen}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
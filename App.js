import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { useFonts } from "expo-font";

import Home from './src/NavigationScreens1/Home';
import IntroScreen from './src/NavigationScreens1/IntroScreen';
import IntroScreen2 from './src/NavigationScreens1/IntroScreen2';
import IntroScreen3 from './src/NavigationScreens1/IntroScreen3';
import Login from './src/NavigationScreens1/Login';
import RegisterUser from './src/NavigationScreens1/RegisterUser';
import RegisterUser2 from './src/NavigationScreens1/RegisterUser2';
import RegisterUser3 from './src/NavigationScreens1/RegisterUser3';
import RegisterUserEmailConf from './src/NavigationScreens1/RegisterUserEmailConf';
import LoginHotel from './src/NavigationScreens1/LoginHotel';
import RegisterHotel from './src/NavigationScreens1/RegisterHotel';
import RegisterHotel2 from './src/NavigationScreens1/RegisterHotel2';
import RegisterHotel3 from './src/NavigationScreens1/RegisterHotel3';
import RegisterHotel4 from './src/NavigationScreens1/RegisterHotel4';
import RegisterHotel5 from './src/NavigationScreens1/RegisterHotel5';
import RegisterHotelEmailConf from './src/NavigationScreens1/RegisterHotelEmailConf';
import RegisterCompleted from './src/NavigationScreens1/RegisterCompleted';
import PasswordRecovery from './src/NavigationScreens1/PasswordRecovery';
import PasswordRecovery2 from './src/NavigationScreens1/PasswordRecovery2';
import PasswordRecovery3 from './src/NavigationScreens1/PasswordRecovery3';
import PasswordRecoveryCompl from './src/NavigationScreens1/PasswordRecoveryCompl';

const Stack = createNativeStackNavigator();

export default function NortePetHospedagem() {
  const [fontsLoaded] = useFonts({
    "LeckerliOneRegular": require("./assets/fonts/LeckerliOneRegular.ttf"),
    "InterRegular": require("./assets/fonts/InterRegular.ttf"),
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
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterUser"
          component={RegisterUser}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterUser2"
          component={RegisterUser2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterUser3"
          component={RegisterUser3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterUserEmailConf"
          component={RegisterUserEmailConf}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginHotel"
          component={LoginHotel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterHotel"
          component={RegisterHotel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterHotel2"
          component={RegisterHotel2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterHotel3"
          component={RegisterHotel3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterHotel4"
          component={RegisterHotel4}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterHotel5"
          component={RegisterHotel5}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterHotelEmailConf"
          component={RegisterHotelEmailConf}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterCompleted"
          component={RegisterCompleted}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PasswordRecovery"
          component={PasswordRecovery}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PasswordRecovery2"
          component={PasswordRecovery2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PasswordRecovery3"
          component={PasswordRecovery3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PasswordRecoveryCompl"
          component={PasswordRecoveryCompl}
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
import * as React from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { useFonts } from "expo-font";

import Screens from "./components/ScreenList";

const Stack = createNativeStackNavigator();

export default function NortePetHospedagem() {
  const [fontsLoaded] = useFonts({
    LeckerliOneRegular: require("./assets/fonts/LeckerliOneRegular.ttf"),
    InterRegular: require("./assets/fonts/InterRegular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare;
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
          component={Screens.IntroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IntroScreen2"
          component={Screens.IntroScreen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IntroScreen3"
          component={Screens.IntroScreen3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Screens.Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterUser"
          component={Screens.RegisterUser}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterUser2"
          component={Screens.RegisterUser2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterUser3"
          component={Screens.RegisterUser3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterUserEmailConf"
          component={Screens.RegisterUserEmailConf}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginHotel"
          component={Screens.LoginHotel}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterHotel"
          component={Screens.RegisterHotel}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterHotel2"
          component={Screens.RegisterHotel2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterHotel3"
          component={Screens.RegisterHotel3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterHotel4"
          component={Screens.RegisterHotel4}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterHotel5"
          component={Screens.RegisterHotel5}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterHotelEmailConf"
          component={Screens.RegisterHotelEmailConf}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterCompleted"
          component={Screens.RegisterCompleted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordRecovery"
          component={Screens.PasswordRecovery}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordRecovery2"
          component={Screens.PasswordRecovery2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordRecovery3"
          component={Screens.PasswordRecovery3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordRecoveryCompl"
          component={Screens.PasswordRecoveryCompl}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Screens.Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useCustomFonts } from "../hooks/useFonts";
import { Home } from "../screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NavigationContainer } from "@react-navigation/native";

export type RootNavigatorParamsList = {
  Home: undefined;
};

export const RootStack = createNativeStackNavigator<RootNavigatorParamsList>();

export const RootNavigator = () => {
  useCustomFonts();

  return (
    <SafeAreaProvider>
      <KeyboardProvider>
        <GestureHandlerRootView>
          <BottomSheetModalProvider>
            <SafeAreaProvider>
              <NavigationContainer>
                <RootStack.Navigator
                  initialRouteName="Home"
                  screenOptions={{ headerShown: false, gestureEnabled: false }}
                >
                  <RootStack.Screen
                    component={Home}
                    name="Home"
                    options={{ headerShown: false, gestureEnabled: false }}
                  />
                </RootStack.Navigator>
              </NavigationContainer>
            </SafeAreaProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </KeyboardProvider>
    </SafeAreaProvider>
  );
};

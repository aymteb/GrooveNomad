import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useCustomFonts } from "../hooks/useFonts";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabBarNavigator } from "./BottomTabBarNavigator";

export type RootNavigatorParamsList = {
  NavBar: undefined;
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
                  initialRouteName="NavBar"
                  screenOptions={{ headerShown: false, gestureEnabled: false }}
                >
                  <RootStack.Screen
                    component={BottomTabBarNavigator}
                    name="NavBar"
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

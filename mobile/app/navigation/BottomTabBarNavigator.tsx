import React from "react";
import { Documents, Home, Profile } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigationBar } from "../components/BottomNavigationBar";
import { useColors } from "../hooks/useColors";

export type BottomTabBarNavigatorParamsList = {
  Home: undefined;
  Documents: undefined;
  Profile: undefined;
};

const BottomTabBarStack =
  createBottomTabNavigator<BottomTabBarNavigatorParamsList>();

export const BottomTabBarNavigator = () => {
  const colors = useColors();

  return (
    <BottomTabBarStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
      tabBar={BottomNavigationBar}
    >
      <BottomTabBarStack.Screen name="Home" component={Home} />
      <BottomTabBarStack.Screen name="Documents" component={Documents} />
      <BottomTabBarStack.Screen name="Profile" component={Profile} />
    </BottomTabBarStack.Navigator>
  );
};

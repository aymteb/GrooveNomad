import React, { FC } from "react";
import { Pressable, StyleSheet, View, Platform } from "react-native";
import { Task } from "../../assets/svg/Task";
import { TaskDone } from "../../assets/svg/TaskDone";
import { Folder } from "../../assets/svg/Folder";
import { FolderOpen } from "../../assets/svg/FolderOpen";
import { Profile } from "../../assets/svg/Profile";
import { ProfilSettings } from "../../assets/svg/ProfilSettings";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useColors } from "../../hooks/useColors";

interface IconProps {
  width: number;
  height: number;
  color: string;
}

type IconComponent = FC<IconProps>;

export const BottomNavigationBar = ({
  state,
  navigation,
  insets,
}: BottomTabBarProps) => {
  const colors = useColors();
  const renderIcon = (routeName: string, focused: boolean) => {
    let Icon: IconComponent = Task;
    let IconFilled: IconComponent = TaskDone;

    switch (routeName) {
      case "Home":
        Icon = Task;
        IconFilled = TaskDone;
        break;
      case "Documents":
        Icon = Folder;
        IconFilled = FolderOpen;
        break;
      case "Profile":
        Icon = Profile;
        IconFilled = ProfilSettings;
        break;
    }

    const FinalIcon = focused ? IconFilled : Icon;
    return (
      <FinalIcon
        width={24}
        height={24}
        color={focused ? colors.sunset : colors.orange}
      />
    );
  };

  return (
    <View
      style={{
        backgroundColor: colors.blue,
        paddingTop: 22,
        paddingBottom:
          Platform.OS === "ios" ? insets.bottom + 10 : insets.bottom + 24,
        borderTopWidth: 1,
        borderTopColor: colors.blue,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        return (
          <Pressable
            key={route.key}
            onPress={() => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            }}
            style={{ flex: 1, alignItems: "center", backgroundColor: colors.blue }}
          >
            {renderIcon(route.name, isFocused)}
          </Pressable>
        );
      })}
    </View>
  );
};

import { useColors } from "../../../hooks/useColors";
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ProjectFilterProps {
  title: string;
  isSelected: boolean;
  onPress: () => void;
}

export const ProjectFilter = ({
  title,
  isSelected,
  onPress,
}: ProjectFilterProps) => {
  const colors = useColors();
  return (
    <TouchableOpacity onPress={onPress} style={{ flex: 1 }}>
      <View
        style={[
          styles.container,
          { backgroundColor: isSelected ? colors.sunset : "#E6E6E6" },
        ]}
      >
        <Text
          style={[
            styles.title,
            { color: isSelected ? colors.orange : colors.black },
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily:
      Platform.OS === "ios" ? "BwModelicaSS01-Bold" : "BwModelica-Bold",
    fontSize: 12,
  },
});

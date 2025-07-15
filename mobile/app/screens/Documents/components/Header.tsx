import { useColors } from "../../../hooks/useColors";
import React from "react";
import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { ProjectFilter } from "./ProjectFilter";

interface HeaderProps {
  numberOfProjects: number;
  completedCount: number;
  currentFilter: "all" | "inProgress" | "completed";
  onValueChange: (value: "all" | "inProgress" | "completed") => void;
  style?: StyleProp<ViewStyle>;
}

export const Header = ({
  numberOfProjects,
  completedCount,
  currentFilter,
  onValueChange,
  style,
}: HeaderProps) => {
  const colors = useColors();
  return (
    <View style={[styles.container, style]}>
      <View style={styles.topContainer}>
        <View style={styles.titleContainer}>
          <Text style={[styles.titleText, { color: colors.black }]}>
            Mes projets
          </Text>
          <Text style={[styles.subtitleText, { color: colors.black }]}>
            {numberOfProjects ?? 0}{" "}
            {numberOfProjects < 2 ? "projet" : "projets"} en cours
          </Text>
        </View>
      </View>
      <View style={styles.filtersContainer}>
        <ProjectFilter
          title="À venir"
          isSelected={currentFilter === "all"}
          onPress={() => onValueChange("all")}
        />
        <ProjectFilter
          title="Passés"
          isSelected={currentFilter === "completed"}
          onPress={() => onValueChange("completed")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 16,
    justifyContent: "flex-start",
    width: "100%",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  titleContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  titleText: {
    fontFamily:
      Platform.OS === "ios" ? "BwModelicaSS01-Bold" : "BwModelica-Bold",
    fontSize: 20,
  },
  subtitleText: {
    fontFamily:
      Platform.OS === "ios" ? "BwModelicaSS01-Regular" : "BwModelica-Regular",
    fontSize: 12,
  },
  IconContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
  },
  filtersContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
  },
});

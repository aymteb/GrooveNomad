import { useColors } from "../../hooks/useColors";
import { View } from "../../View/View";
import {
  Text,
  TouchableOpacity,
  View as RNView,
  StyleSheet,
  FlatList,
  Image,
  ListRenderItemInfo,
} from "react-native";
import { CircleHelp } from "../../assets/svg/CircleHelp";
import { LogOutSettings } from "../../assets/svg/LogOutSettings";
import { ShieldAlert } from "../../assets/svg/ShieldAlert";
import { RightArrow } from "../../assets/svg/RightArrow";

export const Profile = () => {
  const colors = useColors();
  const profilePicture = require("../../assets/images/default_profile.png");
  const options = [
    {
      title: "Aide & assistance",
      icon: <CircleHelp />,
    },
    {
      title: "Données personnelles",
      icon: <ShieldAlert />,
    },
    {
      title: "Déconnexion",
      icon: <LogOutSettings />,
    },
  ];

  const renderItem = ({ item }: ListRenderItemInfo<(typeof options)[0]>) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.optionContainer, { borderColor: colors.white }]}
      >
        <RNView style={styles.optionSubContainer}>
          {item.icon}
          <Text style={[styles.optionTitle, { color: colors.white }]}>
            {item.title}
          </Text>
        </RNView>
        <RightArrow />
      </TouchableOpacity>
    );
  };

  return (
    <View
      linearBackground
      linearBackgroundColors={[colors.orange, colors.sunset, colors.blue]}
    >
      <RNView style={styles.profileContainer}>
        <Image source={profilePicture} style={styles.profile} />
        <RNView style={styles.nameContainer}>
          <Text style={[styles.name, { color: colors.white }]}>Lilian</Text>
        </RNView>
        <RNView style={styles.badgesContainer}></RNView>
        <Text style={[styles.title, { color: colors.white }]}>
          Données personnelles
        </Text>
      </RNView>
      <FlatList
        data={options}
        renderItem={renderItem}
        style={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  badgesContainer: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    width: "100%",
  },
  container: {
    alignItems: "center",
    gap: 12,
  },
  listContainer: {
    marginTop: 24,
  },
  name: {
    fontFamily: "BwModelicaMedium",
    fontSize: 24,
  },
  nameContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
  },
  optionContainer: {
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    marginHorizontal: 24,
    paddingBottom: 16,
    paddingVertical: 12,
  },
  optionSubContainer: {
    flexDirection: "row",
    gap: 16,
  },
  optionTitle: {
    fontFamily: "BwModelicaMedium",
    fontSize: 16,
  },
  profile: {
    borderRadius: 63 / 2,
    height: 63,
    width: 63,
  },
  profileContainer: {
    alignItems: "center",
    gap: 12,
    width: "100%",
  },
  title: {
    alignSelf: "flex-start",
    fontFamily: "BwModelicaBold",
    fontSize: 18,
    marginHorizontal: 24,
    marginTop: 22,
  },
});

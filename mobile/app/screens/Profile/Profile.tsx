import { useColors } from "../../hooks/useColors";
import { View } from "../../View/View";
import { Text } from "react-native";

export const Profile = () => {
  const colors = useColors();

  return (
    <View linearBackground linearBackgroundColors={[colors.orange, colors.sunset, colors.blue]}>
        <Text>Profile</Text>
    </View>
  );
};

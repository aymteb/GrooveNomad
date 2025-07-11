import { View, Text, Image } from "react-native";
import { styles } from "./Home.style";

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.text}>Country road, take me home</Text>
      </View>
    </View>
  );
};

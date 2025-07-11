import { useFonts } from "expo-font";

export const useCustomFonts = () => {
  return useFonts({
    ChillaxBold: require("../assets/fonts/Chillax-Bold.otf"),
    ChillaxLight: require("../assets/fonts/Chillax-Light.otf"),
    ChillaxRegular: require("../assets/fonts/Chillax-Regular.otf"),
    ChillaxMedium: require("../assets/fonts/Chillax-Medium.otf"),
    ChillaxSemibold: require("../assets/fonts/Chillax-Semibold.otf"),
    BwModelicaBold: require("../assets/fonts/BwModelica-Bold.otf"),
    BwModelicaExtraBold: require("../assets/fonts/BwModelica-ExtraBold.otf"),
    BwModelicaLight: require("../assets/fonts/BwModelica-Light.otf"),
    BwModelicaMedium: require("../assets/fonts/BwModelica-Medium.otf"),
    BwModelicaRegular: require("../assets/fonts/BwModelica-Regular.otf"),
    BwModelicaThin: require("../assets/fonts/BwModelica-Thin.otf"),
    BwModelicaBlack: require("../assets/fonts/BwModelica-Black.otf"),
    BwModelicaHairline: require("../assets/fonts/BwModelica-Hairline.otf"),
  });
};

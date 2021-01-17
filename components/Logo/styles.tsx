import { StyleSheet } from "react-native";
import AppStyle from "../../styles";

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const LogoStyles = StyleSheet.create({
  logo: {
    width: widthPercentageToDP("80%"),
    height: heightPercentageToDP("20"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: heightPercentageToDP("7.5%"),
    fontFamily: AppStyle.fontBold,
    fontStyle: "italic",
  },
});

export default LogoStyles;

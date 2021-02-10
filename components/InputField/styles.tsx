import { StyleSheet } from "react-native";

import { heightPercentageToDP } from "react-native-responsive-screen";
import AppStyle from "../../styles";

const InputFieldStyles = StyleSheet.create({
  gradient: {
    height: heightPercentageToDP("7%"),
    borderRadius: 5,
    shadowColor: "#000",
    shadowRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: heightPercentageToDP("4%"),
    fontFamily: AppStyle.fontBold,
    textAlign: "center",
  },
});
export default InputFieldStyles;

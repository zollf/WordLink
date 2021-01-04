import { StyleSheet } from "react-native";

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

import AppStyle from "../../styles";

const InputFieldStyles = StyleSheet.create({
  input: {
    height: heightPercentageToDP("7%"),
    borderRadius: 5,
    textAlign: "center",
  },
});

export default InputFieldStyles;

import { StyleSheet } from "react-native";

import { heightPercentageToDP } from "react-native-responsive-screen";

const InputFieldStyles = StyleSheet.create({
  input: {
    height: heightPercentageToDP("7%"),
    borderRadius: 5,
    textAlign: "center",
    shadowColor: "#000",
    shadowRadius: 4,
  },
});

export default InputFieldStyles;

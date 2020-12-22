import { StyleSheet } from "react-native";
import AppStyle from "../../styles";

const InputFieldStyles = StyleSheet.create({
  input: {
    width: 229,
    height: 39,
    borderRadius: 5,
    textAlign: "center",
    shadowColor: "#000",
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
  },
});

export default InputFieldStyles;

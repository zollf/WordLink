import { StyleSheet } from "react-native";

import AppStyle from "../../../../styles";

const styles = StyleSheet.create({
  buttons: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
  },
  button: {
    margin: 10,
    bottom: 50,
  },
  text: {
    fontSize: 16,
    fontFamily: AppStyle.font,
  }
});

export default styles;
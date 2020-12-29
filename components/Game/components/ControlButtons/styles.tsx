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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 40,
    backgroundColor: AppStyle.primary,
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.1,
    borderRadius: 5,
    margin: 20,
    bottom: 50,
  },
  text: {
    fontSize: 16,
    fontFamily: AppStyle.font,
  }
});

export default styles;
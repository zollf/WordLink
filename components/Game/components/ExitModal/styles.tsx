import { StyleSheet } from "react-native";

import AppStyle from "../../../../styles";

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    width: "100%",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
  },
  exitModal: {
    backgroundColor: AppStyle.lightGrey,
    padding: 30,
    borderRadius: 5,
    marginBottom: 40,
  },
  backing: {
    left: 0,
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.5,
    zIndex: 2,
  },
  button: {
    marginBottom: 10,
    marginTop: 10,
  },
  text: {
    width: 170,
    textAlign: "center",
    fontFamily: AppStyle.font,
    fontSize: 24,
    marginBottom: 10,
  }
});

export default styles;
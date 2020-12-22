import { StyleSheet } from "react-native";

import AppStyle from "../../styles";

const styles = StyleSheet.create({
  levelCard: {
    width: 60,
    height: 60,
    backgroundColor: AppStyle.grey,
    borderRadius: 5,
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.1,
    margin: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 24,
  }
});

export default styles;
import { StyleSheet } from "react-native";

import AppStyle from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    flex: 2.5,
    alignItems: "center",
  },
});

export default styles;

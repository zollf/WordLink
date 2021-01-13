import { StyleSheet } from "react-native";

import { widthPercentageToDP } from "react-native-responsive-screen";

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
  username: {
    width: widthPercentageToDP("60%"),
    fontSize: 12,
  },
  font: {
    fontSize: 24,
  },
});

export default styles;

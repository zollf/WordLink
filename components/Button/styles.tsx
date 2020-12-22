import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: 175,
    height: 76,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.1,
  },
  text: {
    fontSize: 18,
  }
});

export default styles;
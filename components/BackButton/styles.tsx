import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: 35,
    height: 35,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.1,
    position: "absolute",
    top: 60,
    left: 20,
  },
  arrow: {
    width: 20,
    height: 20,
  },
});

export default styles;
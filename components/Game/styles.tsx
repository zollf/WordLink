import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  game: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  information: {
    position: "absolute",
    top: 150,
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },
  letterSelection: {
    height: 150,
    position: "absolute",
    bottom: 150,
  },
  completed: {
    position: "absolute",
    bottom: 150,
  },
});

export default styles;
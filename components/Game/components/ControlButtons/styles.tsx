import { StyleSheet } from "react-native";
import { heightPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  buttons: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
  },
  button: {
    margin: 10,
    bottom: heightPercentageToDP('2%'),
  },
});

export default styles;
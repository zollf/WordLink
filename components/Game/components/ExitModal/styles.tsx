import { StyleSheet } from "react-native";
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

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
    padding: widthPercentageToDP('7%'),
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
    width: widthPercentageToDP('40%'),
    textAlign: "center",
    fontFamily: AppStyle.font,
    fontSize: heightPercentageToDP('3%'),
    marginBottom: 10,
  }
});

export default styles;
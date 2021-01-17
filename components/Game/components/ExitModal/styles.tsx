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
    width: widthPercentageToDP('60%'),
    backgroundColor: AppStyle.lightGrey,
    paddingBottom: widthPercentageToDP('4%'),
    paddingTop: heightPercentageToDP('5%'),
    borderRadius: 5,
    marginBottom: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    width: widthPercentageToDP('50%'),
    textAlign: "center",
    color: 'white',
    fontFamily: AppStyle.fontBold,
    fontSize: heightPercentageToDP('3%'),
    marginBottom: 5,
  },
  quit: {
    left: 10,
    top: 10,
    position: "absolute",
    height: "100%",
    width: "100%",
  }
});

export default styles;
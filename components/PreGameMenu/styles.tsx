import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import AppStyle from '../../styles';

const styles = StyleSheet.create({
  preGameMenu: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 24,
    fontFamily: AppStyle.font
  },
  back: {
    position: "absolute",
    top: heightPercentageToDP('9%'),
    left: widthPercentageToDP('5%'),
    width: "100%",
    height: "100%",
  }
});

export default styles;

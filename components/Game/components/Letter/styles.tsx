import { StyleSheet } from "react-native";
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

import AppStyle from "../../../../styles";

const styles = StyleSheet.create({
  box: {
    width: widthPercentageToDP('10%'),
    height: widthPercentageToDP('10%'),
    backgroundColor: AppStyle.lightGrey,
    margin: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.1,
    borderRadius: 5,
  },
  text: {
    fontFamily: AppStyle.font,
    fontSize: heightPercentageToDP('3%'),
  },
});

export default styles;
import { StyleSheet } from "react-native";
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

import AppStyle from "../../styles";

const styles = StyleSheet.create({
  levelCard: {
    width: widthPercentageToDP('15%'),
    height: widthPercentageToDP('15%'),
    backgroundColor: AppStyle.grey,
    borderRadius: 5,
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.1,
    margin: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: heightPercentageToDP('3%'),
  }
});

export default styles;
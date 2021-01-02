import { StyleSheet } from "react-native";
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

import AppStyle from '../../styles';

const styles = StyleSheet.create({
  preGameWords: {
    backgroundColor: AppStyle.lightGrey,
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.1,
    padding: 15,
    margin: 24,
  },
  block: {
    width: widthPercentageToDP('40%'),
    height: 60,
    borderRadius: 5,
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: heightPercentageToDP('2%'),
    fontFamily: AppStyle.font
  },
  image: {
    width: 40,
    height: 40,
    transform: [{rotate: "90deg"}],
    margin: 20,
    zIndex: 1,
  }
});

export default styles;

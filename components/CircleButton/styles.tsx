import { StyleSheet } from "react-native";
import { widthPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  button: {
    width: widthPercentageToDP('8%'),
    height: widthPercentageToDP('8%'),
    borderRadius: 17,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.1,
  },
  arrow: {
    width: widthPercentageToDP('4%'),
    height: widthPercentageToDP('4%'),
  },
});

export default styles;
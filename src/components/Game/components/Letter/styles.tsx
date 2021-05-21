import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

import AppStyle from 'app/src/styles';

const styles = StyleSheet.create({
  box: {
    width: widthPercentageToDP('10%'),
    height: widthPercentageToDP('10%'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 3,
  },
  text: {
    fontFamily: AppStyle.fontBold,
    fontSize: heightPercentageToDP('3%'),
  },
  shadow: {
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.05,
  },
});

export default styles;

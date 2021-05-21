import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

import AppStyle from 'app/src/styles';

const styles = StyleSheet.create({
  button: {
    width: widthPercentageToDP('40%'),
    height: heightPercentageToDP('8%'),
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
  },
  text: {
    color: 'white',
    fontSize: heightPercentageToDP('2.5%'),
    fontFamily: AppStyle.fontBold,
  },
});

export default styles;

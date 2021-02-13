import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

import AppStyle from 'app/styles';

const styles = StyleSheet.create({
  circle: {
    width: widthPercentageToDP('8%'),
    height: widthPercentageToDP('8%'),
    borderRadius: widthPercentageToDP('8%') / 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    margin: 10,
  },
  text: {
    fontFamily: AppStyle.fontBold,
    fontSize: heightPercentageToDP('2.5%'),
    marginBottom: 5,
  },
});

export default styles;

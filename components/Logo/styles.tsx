import { StyleSheet } from 'react-native';
import AppStyle from 'app/styles';

import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const LogoStyles = StyleSheet.create({
  logo: {
    width: widthPercentageToDP('75%'),
    height: heightPercentageToDP('21.25'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: heightPercentageToDP('7%'),
    fontFamily: AppStyle.fontBold,
    fontStyle: 'italic',
    lineHeight: heightPercentageToDP('7%'),
    height: heightPercentageToDP('5%'),
  },
});

export default LogoStyles;

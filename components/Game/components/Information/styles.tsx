import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

import AppStyle from 'app/styles';

const styles = StyleSheet.create({
  information: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppStyle.lightGrey,
    paddingTop: heightPercentageToDP('1%'),
    paddingBottom: heightPercentageToDP('1%'),
    paddingLeft: widthPercentageToDP('5%'),
    paddingRight: widthPercentageToDP('5%'),
    borderRadius: 5,
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
  },
  difficulty: {
    fontSize: heightPercentageToDP('2%'),
    fontFamily: AppStyle.fontBold,
    color: 'white',
  },
});

export default styles;

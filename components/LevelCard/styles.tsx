import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

import AppStyle from '../../styles';

const styles = StyleSheet.create({
  levelCard: {
    width: widthPercentageToDP('80%'),
    height: heightPercentageToDP('20%'),
    backgroundColor: AppStyle.grey,
    borderRadius: 5,
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    margin: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: heightPercentageToDP('3%'),
    fontFamily: AppStyle.fontBold,
  },
  circle: {
    width: widthPercentageToDP('25%'),
    height: widthPercentageToDP('25%'),
    backgroundColor: 'black',
    position: 'absolute',
    left: '8%',
    bottom: '22%',
    borderRadius: widthPercentageToDP('12.5%'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    fontSize: heightPercentageToDP('5%'),
    fontFamily: AppStyle.fontBold,
    color: 'white',
  },
  words: {
    position: 'absolute',
    left: '40%',
    bottom: '35%',
  },
  quarterCircle: {
    width: widthPercentageToDP('50%'),
    height: widthPercentageToDP('50%'),
    borderRadius: widthPercentageToDP('25%'),
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    position: 'absolute',
    bottom: -widthPercentageToDP('50%') / 2,
    right: -widthPercentageToDP('50%') / 2,
  },
  star: {
    width: widthPercentageToDP('5%'),
    height: widthPercentageToDP('5%'),
    marginRight: '3%',
    marginLeft: '3%',
  },
  stars: {
    position: 'absolute',
    bottom: '8%',
    left: '11%',
    display: 'flex',
    flexDirection: 'row',
  },
});

export default styles;

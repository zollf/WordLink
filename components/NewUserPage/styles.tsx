import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import AppStyle from 'app/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginTop: heightPercentageToDP('-5%'),
    marginBottom: heightPercentageToDP('5%'),
  },
  username: {
    width: 229,
    fontSize: 12,
  },
  text: {
    color: 'black',
    fontFamily: AppStyle.fontBold,
  },
  logotext: {
    fontSize: heightPercentageToDP('4%'),
    width: widthPercentageToDP('60%'),
    textAlign: 'center',
    marginLeft: widthPercentageToDP('7.5%'),
    marginTop: heightPercentageToDP('5%'),
  },
  image: {
    height: heightPercentageToDP('5%'),
    width: widthPercentageToDP('10%'),
    transform: [{ rotate: '-90deg' }],
    marginBottom: heightPercentageToDP('5%'),
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import AppStyle from 'app/src/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPercentageToDP('-5%'),
    marginBottom: 25,
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: heightPercentageToDP('4%'),
    textAlign: 'center',
    marginTop: heightPercentageToDP('5%'),
  },
  image: {
    height: 30,
    width: 30,
    transform: [{ rotate: '-90deg' }],
    marginBottom: 25,
  },
  bottom: {
    marginBottom: 50,
  },
  textWrapper: {
    width: widthPercentageToDP('75%'),
  },
});

export default styles;

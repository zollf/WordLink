import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import AppStyle from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontFamily: AppStyle.fontBold,
  },
  logo: {
    marginBottom: heightPercentageToDP('10%'),
    // marginTop: heightPercentageToDP("-10%"),
    flexDirection: 'column',
    alignItems: 'center',
    width: widthPercentageToDP('75%'),
  },
});

export default styles;

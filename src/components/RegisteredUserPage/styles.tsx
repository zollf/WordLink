import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
  logo: {
    flexDirection: 'column',
    alignItems: 'center',
    width: widthPercentageToDP('75%'),
    marginBottom: 50,
  },
  bottom: {
    marginBottom: 50,
  },
});

export default styles;

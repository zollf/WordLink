import { StyleSheet } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  game: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  information: {
    position: 'absolute',
    top: heightPercentageToDP('8%'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  },
  letterSelection: {
    height: 150,
    position: 'absolute',
    bottom: heightPercentageToDP('15%'),
  },
  completed: {
    position: 'absolute',
    bottom: heightPercentageToDP('15%'),
  },
  back: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: '100%',
    height: '100%',
  },
});

export default styles;

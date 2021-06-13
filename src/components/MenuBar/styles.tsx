import { StyleSheet } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  menuBar: {
    height: 75,
    width: 212,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    zIndex: -1,
  },
  wrapper: {
    position: 'absolute',
    bottom: heightPercentageToDP('8%'),
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
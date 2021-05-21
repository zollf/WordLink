import { StyleSheet } from 'react-native';

import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  Puzzle: {
    minHeight: heightPercentageToDP('5.5%'),
    minWidth: widthPercentageToDP('10%'),
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
  text: {
    textAlign: 'center',
    marginTop: heightPercentageToDP('1%'),
  },
  stars: {
    textAlign: 'center',
  },
});

export default styles;

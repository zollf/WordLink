import { StyleSheet } from 'react-native';

import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  ShowCase: {},
  PuzzleList: {
    flexDirection: 'row',
    borderRadius: 5,
    minWidth: widthPercentageToDP('80%'),
    minHeight: heightPercentageToDP('7%'),
    paddingVertical: heightPercentageToDP('1%'),
    paddingHorizontal: widthPercentageToDP('2%'),
    marginBottom: heightPercentageToDP('1.5%'),
  },
});

export default styles;

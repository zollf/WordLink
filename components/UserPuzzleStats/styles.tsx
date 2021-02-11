import { StyleSheet } from 'react-native';

import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import AppStyles from '../../styles';

const styles = StyleSheet.create({
  PuzzleStats: {
    width: widthPercentageToDP('85%'),
    backgroundColor: AppStyles.lightGrey,
    borderRadius: 5,
    paddingVertical: heightPercentageToDP('1%'),
    paddingHorizontal: widthPercentageToDP('2%'),
  },
});

export default styles;

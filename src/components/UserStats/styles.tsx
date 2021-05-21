import { StyleSheet } from 'react-native';

import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    marginBottom: heightPercentageToDP('3%'),
    width: widthPercentageToDP('70%'),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  stat: {
    marginBottom: 16,
  },
});

export default styles;

import { StyleSheet } from 'react-native';

import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    marginBottom: heightPercentageToDP('3%'),
    width: widthPercentageToDP('85%'),
  },
  stats: {
    marginBottom: heightPercentageToDP('2%'),
  },
  statsContainer: {
    flexDirection: 'row',
  },
});

export default styles;

import { StyleSheet } from 'react-native';

import { heightPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stats: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: heightPercentageToDP('15%'),
  },
});

export default styles;

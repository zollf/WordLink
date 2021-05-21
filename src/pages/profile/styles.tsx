import { StyleSheet } from 'react-native';

import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

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
  user: {
    width: widthPercentageToDP('75%'),
    height: heightPercentageToDP('20%'),
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
  },
  avatar: {
    width: 124,
    height: 124,
    marginLeft: 26,
  },
  userInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  level: {
    fontSize: 18,
  },
});

export default styles;

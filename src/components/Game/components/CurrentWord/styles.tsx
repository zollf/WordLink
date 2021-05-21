import { StyleSheet } from 'react-native';

import AppStyle from 'app/src/styles';

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttons: {
    position: 'absolute',
    bottom: 0,
  },
  button: {
    width: 200,
    height: 20,
    backgroundColor: AppStyle.primary,
  },
});

export default styles;

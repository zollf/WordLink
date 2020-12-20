import { StyleSheet } from "react-native"

import AppStyle from '../../styles';

const styles = StyleSheet.create({
  menuBar: {
    height: 75,
    backgroundColor: AppStyle.grey,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.1,
  },
  wrapper: {
    position: "absolute",
    bottom: 80,
    right: 60,
    left: 60,
  }
});

export default styles;
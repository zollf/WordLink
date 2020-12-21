import { StyleSheet } from "react-native";

import AppStyle from '../../styles';

const styles = StyleSheet.create({
  block: {
    position: "absolute",
    zIndex: -1,
    height: 50,
    width: 50,
    backgroundColor: AppStyle.lightGrey,
    borderRadius: 5,
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.1,
  }
});

export default styles;
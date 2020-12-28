import { StyleSheet } from "react-native";

import AppStyle from '../../styles';

const styles = StyleSheet.create({
  preGameWords: {
    width: 153,
    height: 174,
    backgroundColor: AppStyle.lightGrey,
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.1,
    padding: 15,
    margin: 24,
  },
  block: {
    width: 122,
    height: 39,
    borderRadius: 5,
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 12,
    fontFamily: AppStyle.font
  }
});

export default styles;

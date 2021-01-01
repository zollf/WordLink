import { StyleSheet } from "react-native";

import AppStyle from '../../../../styles';

const styles = StyleSheet.create({
  information: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppStyle.lightGrey,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 5,
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.1,
  },
  text: {
    fontFamily: AppStyle.font,
    fontSize: 24,
  },
  block: {
    width: 50,
    height: 20,
    borderRadius: 4,
    marginTop: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.1,
  },
  difficulty: {
    fontFamily: AppStyle.font,
  },
});

export default styles;
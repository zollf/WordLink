import { StyleSheet } from "react-native";

import AppStyle from '../../styles';

const styles = StyleSheet.create({
  menu: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },

  button: {
    marginBottom: 24,
  },

  text: {
    fontSize: 24,
    marginBottom: 24,
    fontFamily: AppStyle.font,
  },
  back: {
    position: 'absolute',
    top: 50,
    left: 20,
  }

});

export default styles;
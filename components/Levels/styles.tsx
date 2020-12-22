import { StyleSheet } from "react-native";

import AppStyle from '../../styles';

const styles = StyleSheet.create({
  levels: {
    marginTop: 20,
    width: 300,
    height: 300,
    backgroundColor: AppStyle.lightGrey,
    borderRadius: 5,
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.1,
    display: "flex",

    padding: 10,
  },
  group: {
    display: "flex",
    flexDirection: "row",
    flexWrap: 'wrap',
  }
});

export default styles;
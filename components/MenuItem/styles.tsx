import { StyleSheet } from "react-native"

import AppStyle from '../../styles';

const styles = StyleSheet.create({
  menuItem: {
    height: 60,
    width: 75,
    backgroundColor: AppStyle.lightGrey,
    borderRadius: 5,
    marginRight: 10,
    marginLeft: 10,
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2},
    shadowOpacity: 0.1,
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
  },
  
  active: {
  },

  notActive: {
    opacity: 0.1,
  },

  text: {
  }
  
});

export default styles;
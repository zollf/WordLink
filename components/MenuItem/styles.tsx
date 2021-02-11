import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  menuItem: {
    height: 50,
    width: 50,
    borderRadius: 5,
    marginRight: 10,
    marginLeft: 10,
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  active: {},

  notActive: {
    opacity: 0.5,
  },

  image: {
    height: 40,
    width: 40,
  },
});

export default styles;

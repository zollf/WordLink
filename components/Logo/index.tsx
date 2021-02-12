import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import AppStyle from 'app/styles';

const Logo = () => {
  return (
    <LinearGradient
      colors={[AppStyle.orange, AppStyle.blue]}
      start={[0.025, 0.2]}
      locations={[0.5, 0.5]}
      style={styles.logo}
    >
      <Text style={[styles.text, { marginRight: '10%' }]}>WORD</Text>
      <Text style={[styles.text, { marginLeft: '27.5%' }]}>LINK</Text>
    </LinearGradient>
  );
};

export default Logo;

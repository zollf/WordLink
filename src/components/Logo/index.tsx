import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Shadow from '../Shadow';
import AppStyle from 'app/src/styles';

import styles from './styles';

const Logo = () => {
  return (
    <Shadow>
      <LinearGradient
        colors={[AppStyle.orange, AppStyle.blue]}
        start={[0.025, 0.2]}
        locations={[0.5, 0.5]}
        style={styles.logo}
      >
        <Text style={[styles.text, { marginRight: '10%' }]}>WORD</Text>
        <Text style={[styles.text, { marginLeft: '27.5%' }]}>LINK</Text>
      </LinearGradient>
    </Shadow>
  );
};

export default Logo;
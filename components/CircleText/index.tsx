import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import AppStyle from 'app/styles';
import styles from './styles';

interface Props {
  text: string;
}

const CircleText = ({ text }: Props) => {
  return (
    <View>
      <LinearGradient
        colors={[AppStyle.lightBlue, AppStyle.blue]}
        style={styles.circle}
        locations={[0.1, 0.8]}
        start={[-0.1, 0.1]}
      >
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </View>
  );
};

export default CircleText;

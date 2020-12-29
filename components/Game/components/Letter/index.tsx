import React from 'react';
import { View, Text } from 'react-native';

import AppStyle from '../../../../styles';
import styles from './styles';

interface Props {
  letter: string;
  color?: string;
}

const Letter = ({ letter, color }: Props) => {
  return (
    <View style={[styles.box, color ? {
      backgroundColor: AppStyle[color]
    } : null]}>
      <Text style={styles.text}>{letter}</Text>
    </View>
  );
};

export default Letter;
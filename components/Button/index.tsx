import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import AppStyle from '../../styles';
import styles from './styles';

interface Props {
  onPress: () => void;
  text: string;
  color: string;
}

const Button = ({ onPress, text, color }: Props) => {
  return (
    <TouchableOpacity data-test-id="button" onPress={onPress} style={[styles.button, {
      backgroundColor: AppStyle[color],
    }]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
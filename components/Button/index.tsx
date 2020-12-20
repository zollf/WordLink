import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import AppStyle from '../../styles';
import styles from './styles';

interface Props {
  onPress: () => void;
  text: string;
  color: "white" | "grey" | "lightGrey" | "orange" | "blue" | "green" | "red" | "orange_2";
}

const Button = ({ onPress, text, color }: Props) => {
  const styleColor = StyleSheet.create({
    color: {
      backgroundColor: AppStyle[color],
    }
  });

  return (
    <TouchableOpacity data-test-id="button" onPress={onPress} style={[
      styles.button, styleColor.color
    ]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )

};

export default Button;
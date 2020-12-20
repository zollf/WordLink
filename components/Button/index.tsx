import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import AppStyle from '../../styles';
import styles from './styles';

interface Props {
  onPress: () => void;
  text: string;
  color: string;
}

const Button = ({ onPress, text, color }: Props) => {
  const selectColor = () => {
    switch (color) {
      case 'orange':
        return AppStyle.orange;
      case 'blue': 
        return AppStyle.blue;
      case 'green':
        return AppStyle.green;
      default:
        return AppStyle.lightGrey;
    }
  }
  const styleColor = StyleSheet.create({
    color: {
      backgroundColor: selectColor(),
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
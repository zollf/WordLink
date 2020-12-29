import React from 'react';
import { View, ViewStyle } from 'react-native';
import Letter from '../Letter';

import styles from './styles';

interface Props {
  word: string;
  color?: string;
  style?: ViewStyle;
}

const Word = ({ word, color, style }: Props) => {
  return (
    <View style={[styles.box, style]}>
      {word.split("").map((letter: string, i: number) => (
        <Letter color={color} key={`${word}-${letter}-${i}`} letter={letter} />
      ))}
    </View>
  );
};

export default Word;
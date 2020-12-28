import React from 'react';
import { View } from 'react-native';
import Letter from '../Letter';

import styles from './styles';

interface Props {
  word: string;
  color?: string;
}

const Word = ({ word, color }: Props) => {
  return (
    <View style={styles.box}>
      {word.split("").map((letter: string, i: number) => (
        <Letter color={color} key={`${word}-${letter}-${i}`} letter={letter} />
      ))}
    </View>
  );
};

export default Word;
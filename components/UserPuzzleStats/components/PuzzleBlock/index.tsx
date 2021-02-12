import React from 'react';
import { Text, View } from 'react-native';

import AppStyles from 'app/styles';
import styles from './styles';

interface Props {
  number: number;
  stars: number;
}

const PuzzleBlock = ({ number, stars }: Props) => {
  const color = number % 2 == 0 ? AppStyles.primary : AppStyles.secondary;
  const starCount = {
    1: '*',
    2: '* *',
    3: '* * *',
  };
  return (
    <View style={[styles.Puzzle, { backgroundColor: color }]}>
      <Text style={styles.text}>{number}</Text>
      <Text style={styles.stars}>{starCount[stars]}</Text>
    </View>
  );
};

export default PuzzleBlock;

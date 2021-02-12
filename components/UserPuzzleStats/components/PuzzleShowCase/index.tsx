import React from 'react';
import { Text, View } from 'react-native';

import PuzzleBlock from '../PuzzleBlock';

import AppStyle from 'app/styles';
import styles from './styles';

interface Props {
  difficulty: 'easy' | 'medium' | 'hard';
}

const PuzzleShowCase = ({ difficulty }: Props) => {
  //THIS IS JUST A STUB FOR DATA, WHEN ASYNCSTORAGE IS WORKING THIS WILL
  //BE REMOVED
  const completedPuzzles = [
    {
      number: 1,
      stars: 3,
    },
    {
      number: 2,
      stars: 1,
    },
  ];
  return (
    <View style={styles.ShowCase}>
      <Text>{difficulty}</Text>
      <View style={[styles.PuzzleList, { backgroundColor: AppStyle[difficulty] }]}>
        {completedPuzzles.map((puzzle) => (
          <PuzzleBlock key={puzzle.number + ':' + puzzle.stars} {...puzzle} />
        ))}
      </View>
    </View>
  );
};

export default PuzzleShowCase;

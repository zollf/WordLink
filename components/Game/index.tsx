import React from 'react';
import { View } from 'react-native';
import { useStore } from '../../hooks';
import BackButton from '../BackButton';
import { Word, LetterSelection, CurrentWord } from './components';

import styles from './styles';

const Game = () => {
  const { game } = useStore('gameStore');
  return (
    <View style={styles.game}>
      <BackButton color="blue" />
      <Word color="primary" word={game.start} />
      <CurrentWord />
      <Word color="secondary" word={game.end} />
      <LetterSelection />
    </View>
  );
};

export default Game;
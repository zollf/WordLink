import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from '../../hooks';
import BackButton from '../BackButton';

import { 
  Word, 
  LetterSelection, 
  CurrentWord, 
  ControlButtons, 
  Path,
  Completed
} from './components';

import styles from './styles';

const Game = () => {
  const { game, clearGame, completed } = useStore('gameStore');
  const { setCurrentPage } = useStore('global');

  const handleExit = () => {
    setCurrentPage('menu');
    clearGame();
  };

  return (
    <View style={styles.game}>
      <BackButton color="blue" overrideCallback={handleExit}/>
      <Word color="primary" word={game.start} />
      <Path />
      <CurrentWord />
      <Word color="secondary" word={game.end} />
      <LetterSelection />
      {!completed ? <ControlButtons /> : <Completed />}
    </View>
  );
};

export default observer(Game);
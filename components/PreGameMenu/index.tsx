import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from '../../hooks';
import PreGameWords from '../PreGameWords';
import Button from '../Button';

import styles from './styles';
import BackButton from '../BackButton';

const PreGameMenu = () => {
  const { startGame, game, loaded, error, clearGame } = useStore('gameStore');
  const { setCurrentPage } = useStore('global');

  const handleExit = () => {
    setCurrentPage('menu');
    clearGame();
  };

  return (
    (loaded && !error) ? (
      <View style={styles.preGameMenu}>
        <BackButton color="blue" overrideCallback={handleExit}/>
        <Text style={styles.text}>Link the two words</Text>
        <PreGameWords start={game.start} end={game.end} />
        <Button color="primary" text="START" onPress={() => startGame()} />
      </View>
    ) : (
      <BackButton color="blue"/>
    )
  );
};

export default observer(PreGameMenu);

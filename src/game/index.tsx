import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Provider, observer } from 'mobx-react';
import { useStore } from '../../hooks';
import { gameStore } from '../../stores';

import { PreGameMenu, Game as WordLink } from '../../components';

import styles from './styles';

const Game = () => {
  const { currentGameNumber, currentGameDifficulty } = useStore('global');

  useEffect(() => {
    if (!gameStore.inGame) {
      gameStore.loadGame(currentGameNumber, currentGameDifficulty);
    }
    
  });
  
  return (
    <Provider gameStore={gameStore}>
      <View style={styles.game}>
        {!gameStore.inGame ? (
          <PreGameMenu />
        ) : (
          <WordLink />
        )}
      </View>
    </Provider>
  );
};

export default observer(Game);
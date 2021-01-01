import React, { useEffect } from 'react';
import { View, Text, Animated } from 'react-native';
import { observer } from 'mobx-react';
import { useStore, useAnimate } from '../../hooks';
import PreGameWords from '../PreGameWords';
import Button from '../Button';
import BackButton from '../BackButton';

import { ElasticSlideIn, FadeSlideIn, Animate } from '../../animations';
import styles from './styles';

const PreGameMenu = () => {
  const { startGame, game, loaded, error, clearGame } = useStore('gameStore');
  const { setCurrentPage } = useStore('global');

  const [textT, textO] = useAnimate(-100, 0);
  const [wordsO] = useAnimate(0);
  const [buttonO] = useAnimate(0);
  
  useEffect(() => {
    Animated.parallel([
      Animated.stagger(50, [
        ElasticSlideIn(textT),
      ]),
      Animated.stagger(50, [
        FadeSlideIn(textO),
        FadeSlideIn(wordsO),
        FadeSlideIn(buttonO),
      ]),
    ]).start();
  });

  const handleExit = () => {
    setCurrentPage('menu');
    clearGame();
  };

  return (
    (loaded) ? (
      <View style={styles.preGameMenu}>
        <BackButton color="blue" overrideCallback={handleExit}/>
        
        <Animate transform={textT} opacity={textO}>
          <Text style={styles.text}>Link the two words</Text>
        </Animate>

        <Animate opacity={wordsO}>
          <PreGameWords start={game.start} end={game.end}/>
        </Animate>

        <Animate opacity={buttonO}>
          <Button color="primary" text="START" onPress={() => startGame()}/>
        </Animate>

      </View>
    ) : error ? (
      <View style={styles.preGameMenu}>
        <BackButton color="blue" overrideCallback={handleExit}/>
        <Text style={styles.text}>Error level not found</Text>
        <Button color="primary" text="BACK" onPress={handleExit} />
      </View>
    ) : null
  );
};

export default observer(PreGameMenu);

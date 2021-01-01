import React, { useState, useEffect } from 'react';
import { View, Animated } from 'react-native';
import { observer } from 'mobx-react';
import { useStore, useAnimate } from '../../hooks';
import BackButton from '../BackButton';

import { 
  Word, 
  LetterSelection, 
  CurrentWord, 
  ControlButtons, 
  Path,
  Completed,
  ExitModal
} from './components';

import { ElasticSlideIn, FadeSlideIn, Animate } from '../../animations';
import styles from './styles';

const Game = () => {
  const { game, clearGame, completed } = useStore('gameStore');
  const { setCurrentPage } = useStore('global');
  const [exitModal, setExitModal] = useState(false);

  const [word1T, word1O] = useAnimate(-100, 0);
  const [pathT, pathO] = useAnimate(-100, 0);
  const [currentT, currentO] = useAnimate(-100, 0);
  const [word2T, word2O] = useAnimate(-100, 0);
  const [lettersT, lettersO] = useAnimate(-100, 0);

  useEffect(() => {
    Animated.parallel([
      Animated.stagger(20, [
        ElasticSlideIn(word1T),
        ElasticSlideIn(pathT),
        ElasticSlideIn(currentT),
        ElasticSlideIn(word2T),
        ElasticSlideIn(lettersT),
      ]),
      Animated.stagger(20, [
        FadeSlideIn(word1O),
        FadeSlideIn(pathO),
        FadeSlideIn(currentO),
        FadeSlideIn(word2O),
        FadeSlideIn(lettersO),
      ]),
    ]).start();
  });

  const handleExit = () => {
    setCurrentPage('menu');
    clearGame();
  };

  return (
    <View style={styles.game}>
      {exitModal && <ExitModal close={() => setExitModal(false)} exit={handleExit}/>}

      <BackButton color="blue" overrideCallback={() => setExitModal(true)}/>
      
      <Animate transform={word1T} opacity={word1O}>
        <Word color="primary" word={game.start} />
      </Animate>
      
      <Animate transform={pathT} opacity={pathO}>
        <Path />
      </Animate>
      
      <Animate transform={currentT} opacity={currentO}>
        <CurrentWord />
      </Animate>

      <Animate transform={word2T} opacity={word2O}>
        <Word color="secondary" word={game.end} />
      </Animate>

      <Animate transform={lettersT} opacity={lettersO}>
        <LetterSelection />
      </Animate>

      {!completed ? <ControlButtons /> : <Completed />}
    </View>
  );
};

export default observer(Game);
import React, { useState, useEffect } from 'react';
import { View, Animated } from 'react-native';
import { observer } from 'mobx-react';
import { useStore, useAnimate } from '../../hooks';
import CircleButton from '../CircleButton';

import { 
  Word, 
  LetterSelection, 
  CurrentWord, 
  ControlButtons, 
  Path,
  Completed,
  ExitModal,
  Information
} from './components';

import { ElasticSlideIn, FadeSlideIn, Animate } from '../../animations';
import styles from './styles';

const Game = () => {
  const { game, clearGame, completed } = useStore('gameStore');
  const { setCurrentPage } = useStore('global');
  const [exitModal, setExitModal] = useState(false);

  const [infoT, infoO] = useAnimate(-100, 0);
  const [word1T, word1O] = useAnimate(-100, 0);
  const [pathT, pathO] = useAnimate(-100, 0);
  const [currentT, currentO] = useAnimate(-100, 0);
  const [word2T, word2O] = useAnimate(-100, 0);
  const [lettersT, lettersO] = useAnimate(-100, 0);
  useEffect(() => {
    Animated.parallel([
      Animated.stagger(20, [
        ElasticSlideIn(infoT),
        ElasticSlideIn(word1T),
        ElasticSlideIn(pathT),
        ElasticSlideIn(currentT),
        ElasticSlideIn(word2T),
        ElasticSlideIn(lettersT),
      ]),
      Animated.stagger(20, [
        FadeSlideIn(infoO),
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
      <View style={styles.back}>
        <CircleButton overrideCallback={() => setExitModal(true)}/>
      </View>
      
      
      <Animate style={styles.information} transform={infoT} opacity={infoO}>
        <Information/>
      </Animate>

      <View style={styles.content}>
        <Animate transform={word1T} opacity={word1O}>
          <Word color="orange" word={game.start} />
        </Animate>
        
        <Animate transform={pathT} opacity={pathO}>
          <Path />
        </Animate>
        
        <Animate transform={currentT} opacity={currentO}>
          <CurrentWord />
        </Animate>

        <Animate transform={word2T} opacity={word2O}>
          <Word color="blue" word={game.end} />
        </Animate>
      </View>

      <Animate style={styles.letterSelection} transform={lettersT} opacity={lettersO}>
        <LetterSelection />
      </Animate>

      {!completed ? (
        <ControlButtons /> 
      ) : ( 
        <View style={styles.completed}>
          <Completed />
        </View>
      )}
    </View>
  );
};

export default observer(Game);
import React, { useEffect } from 'react';
import { Animated, View } from 'react-native';
import { observer } from 'mobx-react';
import { useStore, useAnimate } from '../../hooks';
import Button from '../Button';
import Levels from '../Levels';

import { ElasticSlideIn, FadeSlideIn, Animate } from '../../animations';
import styles from './styles';

const LevelSelect = () => {
  const [transitionTranslate, transitionOpacity] = useAnimate(-100, 0);
  const [levelTranslate, levelOpacity] = useAnimate(-100, 0);

  const { 
    currentDifficultyOpen, 
    setCurrentDifficultyOpen,
    getDifficultyColor
  } = useStore('global');

  useEffect(() => {
    Animated.parallel([
      Animated.stagger(50, [
        ElasticSlideIn(transitionTranslate),
        ElasticSlideIn(levelTranslate),
      ]),
      Animated.stagger(50, [
        FadeSlideIn(transitionOpacity),
        FadeSlideIn(levelOpacity),
      ]),
    ]).start();
  });

  return (
    <View style={styles.levelSelect} data-test-id="level-select">
      <Animate transform={transitionTranslate} opacity={transitionOpacity}>
        <Button 
          text={currentDifficultyOpen.toUpperCase()} 
          color={getDifficultyColor(currentDifficultyOpen)} 
          onPress={() => setCurrentDifficultyOpen('')}
        />
      </Animate>
      <Animate transform={levelTranslate} opacity={levelOpacity}>
        <Levels />
      </Animate>
    </View>
  );
};

export default observer(LevelSelect);
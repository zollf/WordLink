import React, { useEffect } from 'react';
import { Animated, View } from 'react-native';
import { observer } from 'mobx-react';
import { useStore, useAnimate } from '../../hooks';
import Button from '../Button';
import Levels from '../Levels';

import { ElasticSlideIn, FadeSlideIn } from '../../animations';
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
    <View data-test-id="level-select">
      <Animated.View style={[styles.levelSelect, {
        transform: [{translateX: transitionTranslate}],
        opacity: transitionOpacity,
      }]}>
        <Button 
          text={currentDifficultyOpen.toUpperCase()} 
          color={getDifficultyColor(currentDifficultyOpen)} 
          onPress={() => setCurrentDifficultyOpen('')}
        />
      </Animated.View>
      <Animated.View style={[styles.levelSelect, {
        transform: [{translateX: levelTranslate}],
        opacity: levelOpacity,
      }]}>
        <Levels />
      </Animated.View>
    </View>
  );
};

export default observer(LevelSelect);
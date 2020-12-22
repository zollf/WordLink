import React, { useEffect } from 'react';
import { View, Animated } from "react-native";
import { useStore, useAnimate } from '../../hooks';
import Button from '../Button';

import { ElasticSlideIn, FadeSlideIn } from '../../animations';
import styles from './styles';

const LevelButtons = () => {
  const { setCurrentDifficultyOpen } = useStore('global');

  const [easy, easy_opacity] = useAnimate(-100, 0);
  const [medium, medium_opacity] = useAnimate(-100, 0);
  const [hard, hard_opacity] = useAnimate(-100, 0);

  useEffect(() => {
    Animated.parallel([
      Animated.stagger(50, [
        ElasticSlideIn(easy),
        ElasticSlideIn(medium),
        ElasticSlideIn(hard)
      ]),
      Animated.stagger(50, [
        FadeSlideIn(easy_opacity),
        FadeSlideIn(medium_opacity),
        FadeSlideIn(hard_opacity),
      ]),
    ]).start();
  });

  return (
    <View>
      <Animated.View style={[styles.button, {
        transform: [{translateX: easy}],
        opacity: easy_opacity,
      }]}>
        <Button text="EASY" color="green" onPress={() => setCurrentDifficultyOpen('easy')}/>
      </Animated.View>

      <Animated.View style={[styles.button, {
        transform: [{translateX: medium}],
        opacity: medium_opacity,
      }]}>
        <Button text="MEDIUM" color="orange_2" onPress={() => setCurrentDifficultyOpen('medium')}/>
      </Animated.View>

      <Animated.View style={[styles.button, {
        transform: [{translateX: hard}],
        opacity: hard_opacity,
      }]}>
        <Button text="HARD" color="red" onPress={() => setCurrentDifficultyOpen('hard')}/>
      </Animated.View>
    </View>
  );
};

export default LevelButtons;
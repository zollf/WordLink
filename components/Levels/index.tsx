import React, { useEffect } from 'react';
import { View, Animated } from 'react-native';
import { observer } from 'mobx-react';
import { useStore, useMultiAnimate } from '../../hooks';
import { getLevel } from '../../data';
import LevelCard from '../LevelCard';

import { ScaleSlideIn, Animate } from '../../animations';
import styles from './styles';

const Levels = () => {
  const { currentDifficultyOpen } = useStore('global');
  const level = getLevel(currentDifficultyOpen);
  const animations = useMultiAnimate(0, Object.keys(level || {}).length);

  useEffect(() => {
    Animated.sequence([
      Animated.delay(100),
      Animated.stagger(50, 
        animations.map((a: Animated.Value) => ScaleSlideIn(a))
      ),
    ]).start();
  });

  return (
    <View style={styles.levels}>
      <View style={styles.group}>
        {level && Object.keys(level).map((key: string, i: number) => (
          <Animate scale={animations[i]} key={key}>
            <LevelCard difficulty={currentDifficultyOpen} number={key}/>
          </Animate>
        ))}
      </View>
    </View>
  );
};

export default observer(Levels);
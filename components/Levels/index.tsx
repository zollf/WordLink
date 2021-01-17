import React, { useEffect } from 'react';
import { View, Animated, ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import { useStore, useMultiAnimate } from '../../hooks';
import { getLevel } from '../../data';
import LevelCard from '../LevelCard';

import { ScaleSlideIn, Animate } from '../../animations';
import styles from './styles';

const Levels = () => {
  const { currentDifficultyOpen } = useStore('global');
  const level = getLevel(currentDifficultyOpen);
  const animations = useMultiAnimate(0.8, Object.keys(level || {}).length);

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
      <ScrollView style={styles.group}>
        {level && Object.keys(level).map((key: string, i: number) => (
          <Animate scale={animations[i]} key={key}>
            <LevelCard level={level[key]} difficulty={currentDifficultyOpen} number={key}/>
          </Animate>
        ))}
      </ScrollView>
    </View>
  );
};

export default observer(Levels);
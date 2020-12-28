import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from '../../hooks';

import easy from '../../data/easy';
import medium from '../../data/medium';
import hard from '../../data/hard';

import LevelCard from '../LevelCard';
import styles from './styles';

const Levels = () => {
  const { currentDifficultyOpen } = useStore('global');
  const difficulty = () => {
    switch (currentDifficultyOpen) {
      case 'easy':
        return easy;
      case 'medium':
        return medium;
      case 'hard':
        return hard;
      default:
        return {};
    }
  };

  return (
    <View style={styles.levels}>
      <View style={styles.group}>
        {Object.keys(difficulty()).map((key: string) => (
          <LevelCard key={key} difficulty={currentDifficultyOpen} number={key}/>
        ))}
      </View>
    </View>
  );
};

export default observer(Levels);
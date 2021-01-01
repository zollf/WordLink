import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from '../../hooks';
import { getLevel } from '../../data';

import LevelCard from '../LevelCard';
import styles from './styles';

const Levels = () => {
  const { currentDifficultyOpen } = useStore('global');
  const level = getLevel(currentDifficultyOpen);
  return (
    <View style={styles.levels}>
      <View style={styles.group}>
        {level && Object.keys(level).map((key: string) => (
          <LevelCard key={key} difficulty={currentDifficultyOpen} number={key}/>
        ))}
      </View>
    </View>
  );
};

export default observer(Levels);
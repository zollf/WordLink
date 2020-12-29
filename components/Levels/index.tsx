import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from '../../hooks';
import { getLevel } from '../../data';

import LevelCard from '../LevelCard';
import styles from './styles';

const Levels = () => {
  const { currentDifficultyOpen } = useStore('global');

  return (
    <View style={styles.levels}>
      <View style={styles.group}>
        {Object.keys(getLevel(currentDifficultyOpen)).map((key: string) => (
          <LevelCard key={key} difficulty={currentDifficultyOpen} number={key}/>
        ))}
      </View>
    </View>
  );
};

export default observer(Levels);
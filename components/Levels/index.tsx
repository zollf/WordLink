import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';

import easy from '../../data/easy';

import LevelCard from '../LevelCard';
import styles from './styles';

const Levels = () => {
  return (
    <View style={styles.levels}>
      <View style={styles.group}>
        {Object.keys(easy).map((key: string) => (
          <LevelCard key={key} number={key}/>
        ))}
      </View>
    </View>
  );
};

export default observer(Levels);
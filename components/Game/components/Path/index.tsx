import React from 'react';
import { View, LayoutAnimation } from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from '../../../../hooks';
import Word from '../Word';

import styles from './styles';

const Path = () => {
  const { path, stepNumber } = useStore('gameStore');
  LayoutAnimation.configureNext({ 
    duration: 500, 
    update: { type: 'spring', springDamping: 0.4 }, 
  });

  return (
    <View style={styles.path}>
      {path.map((word: string, i: number) => (
        <Word style={{
          opacity: stepNumber > 0 ? (0.5 / stepNumber) * i : 0
        }} 
        word={word}
        color="lightGrey" 
        key={`path-${word}`}
        />
      ))}
    </View>
  );
};

export default observer(Path);
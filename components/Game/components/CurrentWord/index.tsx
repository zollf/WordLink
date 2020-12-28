import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from '../../../../hooks';
import Letter from '../Letter';

import styles from './styles';

const CurrentWord = () => {
  const { currentWord } = useStore('gameStore');
  
  return (
    <View style={styles.box}>
      {currentWord.split("").map((letter: string, i: number) => (
        <Letter key={`currentWord-${letter}-${i}`} letter={letter} />
      ))}
    </View>
  );
};

export default observer(CurrentWord);
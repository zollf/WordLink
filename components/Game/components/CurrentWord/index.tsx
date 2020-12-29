import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from '../../../../hooks';
import Letter from '../Letter';

import styles from './styles';

const CurrentWord = () => {
  const { currentWord, changeLetter, completed } = useStore('gameStore');
  
  return (
    <View style={styles.box}>
      {!completed && currentWord.split("").map((letter: string, i: number) => (
        <TouchableOpacity onPress={() => changeLetter(i)} key={`currentWord-${letter}-${i}`}>
          <Letter letter={letter} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default observer(CurrentWord);
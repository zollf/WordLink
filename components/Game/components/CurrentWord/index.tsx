import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from '../../../../hooks';
import Letter from '../Letter';

import styles from './styles';

const CurrentWord = () => {
  const { currentWord, changeLetter } = useStore('gameStore');
  
  return (
    <View>
      <View style={styles.box}>
        {currentWord.split("").map((letter: string, i: number) => (
          <TouchableOpacity onPress={() => changeLetter(i)} key={`currentWord-${letter}-${i}`}>
            <Letter letter={letter} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default observer(CurrentWord);
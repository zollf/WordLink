import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from '../../../../hooks';
import Letter from '../Letter';

import styles from './styles';

const LetterSelection = () => {
  const { getNewLetters } = useStore('gameStore');
  const letters: string[] = getNewLetters();
  return (
    <View style={styles.letterSelection}>
      {letters.map((letter: string) => (
        <Letter key={`letterSelection-${letter}`} letter={letter} />
      ))}
    </View>
  );
};

export default observer(LetterSelection);
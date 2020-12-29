import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from '../../../../hooks';
import Letter from '../Letter';

import styles from './styles';

const LetterSelection = () => {
  const { getNewLetters, setSelectedLetter, selectedLetter, currentWord, completed } = useStore('gameStore');
  const [letters, setLetters] = useState(getNewLetters());

  useEffect(() => { 
    setLetters(getNewLetters());
  }, [currentWord]);


  return (
    <View style={styles.letterSelection}>
      {!completed && letters.map((letter: string, i: number) => (
        <TouchableOpacity onPress={() => setSelectedLetter(letter)} key={`letterSelection-${letter}-${i}`}>
          <Letter color={selectedLetter === letter ? "green" : ""} letter={letter} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default observer(LetterSelection);
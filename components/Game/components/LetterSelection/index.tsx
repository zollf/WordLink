import React, { useEffect, useState } from 'react';
import { LayoutAnimation, View } from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from '../../../../hooks';
import Letter from '../Letter';

import styles from './styles';

const LetterSelection = () => {
  const { getNewLetters, setSelectedLetter, selectedLetter, currentWord, completed } = useStore('gameStore');
  const [letters, setLetters] = useState(getNewLetters());

  useEffect(() => { 
    LayoutAnimation.configureNext({ 
      duration: 200, 
      update: { type: 'spring', springDamping: 0.9 }, 
    });
    setLetters(getNewLetters());
  }, [currentWord]);

  return (
    <View style={styles.letterSelection}>
      {!completed && letters.map((letter: string, i: number) => (
        <Letter onPress={() => setSelectedLetter(letter)} color={selectedLetter === letter ? "green" : ""} letter={letter} key={`letterSelection-${letter}-${i}`}/>
      ))}
    </View>
  );
};

export default observer(LetterSelection);
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Animated, LayoutAnimation } from 'react-native';
import { observer } from 'mobx-react';
import { useStore, useAnimate } from '../../../../hooks';
import Letter from '../Letter';

import { ElasticSlideIn, FadeSlideIn } from '../../../../animations';
import styles from './styles';

const LetterSelection = () => {
  const { getNewLetters, setSelectedLetter, selectedLetter, currentWord } = useStore('gameStore');
  const [translate, opacity] = useAnimate(-100, 0);
  const [letters, setLetters] = useState(getNewLetters());


  useEffect(() => { 
    LayoutAnimation.spring();
    setLetters(getNewLetters());
  }, [currentWord]);


  return (
    <Animated.View style={[styles.letterSelection, {

    }]}>
      {letters.map((letter: string, i: number) => (
        <TouchableOpacity onPress={() => setSelectedLetter(letter)} key={`letterSelection-${letter}-${i}`}>
          <Letter color={selectedLetter === letter ? "green" : ""} letter={letter} />
        </TouchableOpacity>
      ))}
    </Animated.View>
  );
};

export default observer(LetterSelection);
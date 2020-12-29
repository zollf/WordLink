import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import { observer } from 'mobx-react';
import { useStore, useAnimate } from '../../../../hooks';
import Word from '../Word';

import { ElasticSlideIn, FadeSlideIn } from '../../../../animations';

const Path = () => {
  const { path, stepNumber } = useStore('gameStore');
  const [translate, opacity] = useAnimate(-100, 0);

  useEffect(() => {
    Animated.parallel([
      Animated.stagger(50, [
        ElasticSlideIn(translate),
      ]),
      Animated.stagger(50, [
        FadeSlideIn(opacity),
      ]),
    ]).start();
  });
  
  return (
    <Animated.View style={{
      transform: [{translateX: translate}],
      opacity: opacity,
    }}>
      {path.map((word: string, i: number) => (
        i > 0 && (
          <Word style={{
            opacity: (0.5 / stepNumber) * i
          }} 
          word={word}
          color="lightGrey" 
          key={`path-${word}`}
          />
        )
      ))}
    </Animated.View>
  );
};

export default observer(Path);
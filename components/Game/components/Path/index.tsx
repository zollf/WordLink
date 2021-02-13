import React from 'react';
import { View, LayoutAnimation } from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from '../../../../hooks';
import Word from '../Word';

const Path = () => {
  const { path, stepNumber, completed } = useStore('gameStore');
  const maxOnScreen = 2;
  LayoutAnimation.configureNext({
    duration: 500,
    update: { type: 'spring', springDamping: 0.4 },
  });
  /* istanbul ignore next */
  const calcOpacity = (step: number) => {
    if (!completed) {
      if (step > 0) {
        if (stepNumber > maxOnScreen) {
          if (step < stepNumber - maxOnScreen + 1) {
            return 0;
          } else {
            return (0.5 / maxOnScreen) * (step - (stepNumber - maxOnScreen));
          }
        } else {
          return (0.5 / stepNumber) * step;
        }
      } else {
        return 0;
      }
    } else {
      if (step > 0) {
        return 1;
      } else {
        return 0;
      }
    }
  };
  /* istanbul ignore next */
  const calcMargin = () => {
    if (!completed) {
      if (stepNumber > maxOnScreen) {
        return -44 * (stepNumber - maxOnScreen) - 44;
      } else {
        return -44;
      }
    } else {
      return -44;
    }
  };

  return (
    <View
      style={{
        marginTop: calcMargin(),
      }}
    >
      {path.map((word: string, i: number) =>
        completed && i === stepNumber ? null : (
          <Word
            style={{
              opacity: calcOpacity(i),
            }}
            word={word}
            key={`path-${word}-${i}`}
          />
        ),
      )}
    </View>
  );
};

export default observer(Path);

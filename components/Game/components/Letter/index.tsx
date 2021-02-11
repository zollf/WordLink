import React from 'react';
import { Animated, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAnimate } from '../../../../hooks';

import AppStyle from '../../../../styles';
import styles from './styles';

interface Props {
  letter: string;
  color?: string;
  onPress?: () => void;
}

const Letter = ({ letter, color, onPress }: Props) => {
  const [spring] = useAnimate(1);

  const getColor = () => {
    switch (color) {
      case 'orange':
        return [AppStyle.lightOrange, AppStyle.orange];
      case 'blue':
        return [AppStyle.lightBlue, AppStyle.blue];
      case 'grey':
        return [AppStyle.lightGrey, AppStyle.grey];
      case 'green':
        return [AppStyle.lightGreen, AppStyle.green];
      default:
        return [AppStyle.lightGrey, AppStyle.grey];
    }
  };

  const handlePress = () => {
    if (onPress) {
      Animated.sequence([
        Animated.timing(spring, {
          toValue: 0.8,
          duration: 1,
          useNativeDriver: true,
        }),
        Animated.spring(spring, {
          toValue: 1,
          friction: 3,
          useNativeDriver: true,
        }),
      ]).start();
      onPress();
    }
  };

  return !onPress ? (
    <LinearGradient colors={getColor()} style={styles.box} locations={[0.5, 0.5]} start={[-0.1, 0.6]}>
      <Text
        style={[
          styles.text,
          {
            color: color ? 'white' : 'black',
          },
        ]}
      >
        {letter}
      </Text>
    </LinearGradient>
  ) : (
    <Animated.View
      style={{
        transform: [{ scale: spring }],
      }}
    >
      <TouchableOpacity onPress={handlePress}>
        <LinearGradient colors={getColor()} style={styles.box} locations={[0.5, 0.5]} start={[-0.1, 0.6]}>
          <Text
            style={[
              styles.text,
              {
                color: color ? 'white' : 'black',
              },
            ]}
          >
            {letter}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Letter;

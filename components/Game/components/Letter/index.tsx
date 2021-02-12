import React from 'react';
import { Animated, TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAnimate } from 'app/hooks';

import { getGradient } from 'app/styles';
import styles from './styles';

interface Props {
  letter: string;
  color?: string;
  onPress?: () => void;
}

const Letter = ({ letter, color, onPress }: Props) => {
  const [spring] = useAnimate(1);

  const textColor = color ? 'white' : 'black';

  const handlePress = () => {
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
    onPress && onPress();
  };

  return !onPress ? (
    <View data-test-id="static" style={styles.shadow}>
      <LinearGradient colors={getGradient(color)} style={styles.box} locations={[0.1, 0.8]} start={[-0.1, 0.6]}>
        <Text
          style={[
            styles.text,
            {
              color: textColor,
            },
          ]}
        >
          {letter}
        </Text>
      </LinearGradient>
    </View>
  ) : (
    <Animated.View
      style={{
        transform: [{ scale: spring }],
      }}
    >
      <TouchableOpacity data-test-id="letter-button" onPress={handlePress} style={styles.shadow}>
        <LinearGradient colors={getGradient(color)} style={styles.box} locations={[0.1, 0.8]} start={[-0.1, 0.6]}>
          <Text
            style={[
              styles.text,
              {
                color: textColor,
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

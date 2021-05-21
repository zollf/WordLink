import React from 'react';
import { Text, TouchableOpacity, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAnimate } from 'app/src/hooks';

import { getGradient } from 'app/src/styles';
import styles from './styles';

interface Props {
  onPress: () => void;
  text: string;
  color?: string;
}

const Button = ({ onPress, text, color }: Props) => {
  const [spring] = useAnimate(1);
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
    onPress();
  };

  return (
    <Animated.View
      style={{
        transform: [{ scale: spring }],
      }}
    >
      <TouchableOpacity data-test-id="button" onPress={handlePress}>
        <LinearGradient colors={getGradient(color)} style={styles.button} start={[-0.1, 0.1]} locations={[0.5, 0.5]}>
          <Text style={styles.text}>{text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Button;

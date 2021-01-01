import React from 'react';
import { Text, TouchableOpacity, Animated } from 'react-native';
import { useAnimate } from '../../hooks';

import AppStyle from '../../styles';
import styles from './styles';

interface Props {
  onPress: () => void;
  text: string;
  color: string;
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
      })
    ]).start();
    onPress();
  };

  return (
    <Animated.View style={{
      transform: [{scale: spring}]
    }}>
      <TouchableOpacity data-test-id="button" onPress={handlePress} style={[styles.button, {
        backgroundColor: AppStyle[color],
      }]}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Button;
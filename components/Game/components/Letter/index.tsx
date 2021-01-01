import React from 'react';
import { Animated, TouchableOpacity, View, Text } from 'react-native';
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
        })
      ]).start();
      onPress();  
    }
  };

  return (
    !onPress ? (
      <View style={[styles.box, color ? {
        backgroundColor: AppStyle[color]
      } : null]}>
        <Text style={styles.text}>{letter}</Text>
      </View>
    ) : (
      <Animated.View style={{
        transform: [{scale: spring}]
      }}>
        <TouchableOpacity onPress={handlePress} style={[styles.box, color ? {
          backgroundColor: AppStyle[color]
        } : null]}>
          <Text style={styles.text}>{letter}</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  );
};

export default Letter;
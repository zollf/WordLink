import { useRef } from 'react';
import { Animated } from 'react-native';

export default function useAnimate (...values: number[]) {
  const animate: Animated.Value[] = [];

  for (let i = 0; i < values.length; i++) {
    const value = useRef<Animated.Value>(new Animated.Value(values[i])).current;
    animate.push(value);
  }

  return animate;
}

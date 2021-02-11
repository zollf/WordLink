import { useRef } from 'react';
import { Animated } from 'react-native';

export default function useAnimate(...values: number[]) {
  return values.map((value: number) => useRef<Animated.Value>(new Animated.Value(value)).current);
}

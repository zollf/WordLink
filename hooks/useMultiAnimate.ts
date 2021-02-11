import { useRef } from 'react';
import { Animated } from 'react-native';

const useMultiAnimate = (value: number, amount: number) => {
  const values: Animated.Value[] = [];
  for (let i = 0; i < amount; i++) {
    values.push(useRef<Animated.Value>(new Animated.Value(value)).current);
  }
  return values;
};

export default useMultiAnimate;

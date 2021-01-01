import React from 'react';
import { Animated, ViewStyle } from 'react-native';

interface Props {
  children: React.ReactNode;
  transform?: Animated.Value;
  opacity?: Animated.Value;
  style?: ViewStyle;
}

const Animate = ({ children, transform, opacity, style }: Props) => {
  return (
    <Animated.View style={[style, {
      transform: [{translateX: transform || 0}],
      opacity: opacity || 0,
    }]}>
      {children}
    </Animated.View>
  );
};

export default Animate;
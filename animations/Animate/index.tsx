import React from 'react';
import { Animated, ViewStyle } from 'react-native';

interface Props {
  children: React.ReactNode;
  transform?: Animated.Value;
  opacity?: Animated.Value;
  scale?: Animated.Value;
  style?: ViewStyle;
}

const Animate = ({ children, transform, opacity, scale, style }: Props) => {
  return (
    <Animated.View
      style={[
        style,
        {
          transform: [{ translateX: transform || 0 }, { scale: scale || 1 }],
          opacity: opacity || 1,
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default Animate;

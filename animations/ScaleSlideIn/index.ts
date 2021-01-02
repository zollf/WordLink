import { Animated } from "react-native";

const ScaleSlideIn = (ref: Animated.Value) => {
  return (
    Animated.spring(ref, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    })
  );
};

export default ScaleSlideIn;
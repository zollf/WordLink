import { Animated } from "react-native";

const FadeSlideIn = (ref: Animated.Value) => {
  return (
    Animated.timing(ref, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    })
  );
};

export default FadeSlideIn;
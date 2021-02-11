import { Animated, Easing } from 'react-native';

const ElasticSlideIn = (ref: Animated.Value) => {
  return Animated.timing(ref, {
    toValue: 0,
    duration: 200,
    easing: Easing.elastic(1),
    useNativeDriver: true,
  });
};

export default ElasticSlideIn;

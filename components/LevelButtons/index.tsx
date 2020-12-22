import React, { useRef, useEffect } from 'react';
import { View, Animated, Easing } from "react-native";
import Button from '../Button';

import styles from './styles';

const LevelButtons = () => {
  const easy = useRef(new Animated.Value(-100)).current;
  const medium = useRef(new Animated.Value(-100)).current;
  const hard = useRef(new Animated.Value(-100)).current;

  const easy_opacity = useRef(new Animated.Value(0)).current;
  const medium_opacity = useRef(new Animated.Value(0)).current;
  const hard_opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.stagger(50, [
        Animated.timing(easy, {
          toValue: 0,
          duration: 200,
          easing: Easing.elastic(1),
          useNativeDriver: true,
        }),
        Animated.timing(medium, {
          toValue: 1,
          duration: 200,
          easing: Easing.elastic(1),
          useNativeDriver: true,
        }),
        Animated.timing(hard, {
          toValue: 1,
          duration: 200,
          easing: Easing.elastic(1),
          useNativeDriver: true,
        }),
      ]),
      Animated.stagger(50, [
        Animated.timing(easy_opacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(medium_opacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(hard_opacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  });

  return (
    <View>
      <Animated.View style={[styles.button, {
        transform: [{translateX: easy}],
        opacity: easy_opacity,
      }]}>
        <Button text="EASY" color="green" onPress={() => ({})}/>
      </Animated.View>

      <Animated.View style={[styles.button, {
        transform: [{translateX: medium}],
        opacity: medium_opacity,
      }]}>
        <Button text="MEDIUM" color="orange_2" onPress={() => ({})}/>
      </Animated.View>

      <Animated.View style={[styles.button, {
        transform: [{translateX: hard}],
        opacity: hard_opacity,
      }]}>
        <Button text="HARD" color="red" onPress={() => ({})}/>
      </Animated.View>
    </View>
  );
};

export default LevelButtons;
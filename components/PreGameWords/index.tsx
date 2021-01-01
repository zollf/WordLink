import React, { useEffect } from 'react';
import { Animated, View, Text, Image } from 'react-native';
import link from '../../images/transfer.png';
import { useAnimate } from '../../hooks';

import AppStyle from '../../styles';
import styles from './styles';

interface Props {
  start: string;
  end: string;
}

const PreGameWords = ({ start, end }: Props) => {
  const [b1, b2] = useAnimate(40, -40);

  useEffect(() => {
    Animated.sequence([
      Animated.delay(100),
      Animated.parallel([
        Animated.spring(b1, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.spring(b2, {
          toValue: 0,
          useNativeDriver: true,
        })
      ])
    ]).start();
  });

  return (
    <View style={styles.preGameWords}>
      <Animated.View style={{
        transform: [{translateY: b1}]
      }}>
        <PreGameBlock type="primary" word={start}/>
      </Animated.View>
      
      <Image style={styles.image} source={link} />

      <Animated.View style={{
        transform: [{translateY: b2}]
      }}>
        <PreGameBlock type="secondary" word={end}/>
      </Animated.View>
    </View>
  );
};

interface BlockProps {
  word: string;
  type: "primary" | "secondary";
}

const PreGameBlock = ({ word, type }: BlockProps) => {
  return (
    <View style={[styles.block, {
      backgroundColor: AppStyle[type],
    }]}>
      <Text style={styles.text}>{word}</Text>
    </View>
  );
};

export default PreGameWords;

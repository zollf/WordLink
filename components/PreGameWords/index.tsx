import React from 'react';
import { View, Text } from 'react-native';

import AppStyle from '../../styles';

import styles from './styles';

interface Props {
  start: string;
  end: string;
}

const PreGameWords = ({ start, end }: Props) => {
  return (
    <View style={styles.preGameWords}>
      <PreGameBlock type="primary" word={start}/>
      <PreGameBlock type="secondary" word={end}/>
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
      <Text style={styles.text}>{word.toUpperCase()}</Text>
    </View>
  );
};

export default PreGameWords;

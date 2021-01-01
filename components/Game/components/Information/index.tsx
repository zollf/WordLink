import React from 'react';
import { View, Text } from 'react-native';
import { useStore } from '../../../../hooks';

import AppStyle from '../../../../styles';
import styles from './styles';

const Information = () => {
  const { gameTitle, difficulty } = useStore('gameStore');
  return (
    <View style={styles.information}>
      <Text style={styles.text}>{gameTitle}</Text>
      <View style={[styles.block, {
        backgroundColor: AppStyle[difficulty]
      }]}>
        <Text style={styles.difficulty}>{difficulty.toUpperCase()}</Text>
      </View>
    </View>
  );
};

export default Information;
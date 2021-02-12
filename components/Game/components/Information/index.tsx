import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useStore } from 'app/hooks';

import { getGradient } from 'app/styles';
import styles from './styles';

const Information = () => {
  const { difficulty } = useStore('gameStore');

  return (
    <LinearGradient
      colors={getGradient(difficulty.toLowerCase())}
      style={styles.information}
      locations={[0.5, 0.5]}
      start={[-0.1, 0.4]}
    >
      <Text style={styles.difficulty}>{difficulty.toUpperCase()}</Text>
    </LinearGradient>
  );
};

export default Information;

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useStore } from '../../hooks';

import styles from './styles';

interface Props {
  number: string,
  difficulty: string,
}

const LevelCard = ({ number, difficulty }: Props) => {
  const { loadGame } = useStore('global');
  return (
    <TouchableOpacity onPress={() => loadGame(number, difficulty)} data-test-id={`card-${number}`} style={styles.levelCard}>
      <Text style={styles.text}>{number}</Text>
    </TouchableOpacity>
  );
};

export default LevelCard;
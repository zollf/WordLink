import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

interface Props {
  number: string,
}

const LevelCard = ({ number }: Props) => {
  return (
    <TouchableOpacity onPress={() => ({})} data-test-id={`card-${number}`} style={styles.levelCard}>
      <Text style={styles.text}>{number}</Text>
    </TouchableOpacity>
  );
};

export default LevelCard;
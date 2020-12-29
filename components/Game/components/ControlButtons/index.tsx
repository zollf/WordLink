import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useStore } from '../../../../hooks';

import styles from './styles';

const ControlButtons = () => {
  const { resetCurrentWord, undo } = useStore('gameStore');
  
  return (
    <View style={styles.buttons}>
      <TouchableOpacity style={styles.button} onPress={() => resetCurrentWord()}>
        <Text style={styles.text}>RESET</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => undo()}>
        <Text style={styles.text}>UNDO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ControlButtons;
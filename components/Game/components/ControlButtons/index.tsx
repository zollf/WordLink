import React from 'react';
import { View } from 'react-native';
import { useStore } from '../../../../hooks';
import Button from '../../../Button';

import styles from './styles';

const ControlButtons = () => {
  const { resetCurrentWord, undo } = useStore('gameStore');
  
  return (
    <View style={styles.buttons}>
      <View style={styles.button}>
        <Button color="primary" onPress={() => resetCurrentWord()} text="RESET"/>
      </View>
      <View style={styles.button}>
        <Button color="secondary" onPress={() => undo()} text="UNDO"/>
      </View>
    </View>
  );
};

export default ControlButtons;
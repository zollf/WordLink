import React from 'react';
import { View } from 'react-native';
import { useStore } from 'app/src/hooks';
import Button from 'app/src/components/Button';

import styles from './styles';

const ControlButtons = () => {
  const { resetCurrentWord, undo } = useStore('gameStore');

  return (
    <View style={styles.buttons}>
      <View style={styles.button}>
        <Button data-test-id="reset" color="orange" onPress={() => resetCurrentWord()} text="RESET" />
      </View>
      <View style={styles.button}>
        <Button data-test-id="undo" color="orange" onPress={() => undo()} text="UNDO" />
      </View>
    </View>
  );
};

export default ControlButtons;

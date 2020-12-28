import React from 'react';
import { View, Text } from 'react-native';
import { useStore } from '../../hooks';
import PreGameWords from '../PreGameWords';
import Button from '../Button';

import styles from './styles';
import BackButton from '../BackButton';

const PreGameMenu = () => {
  const { startGame } = useStore('gameStore');
  return (
    <View style={styles.preGameMenu}>
      <BackButton color="blue"/>
      <Text style={styles.text}>Link the two words</Text>
      <PreGameWords start="forty" end="fifty" />
      <Button color="primary" text="START" onPress={startGame} />
    </View>
  );
};

export default PreGameMenu;

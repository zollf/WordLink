import React from 'react';
import { View } from 'react-native';
import { useStore } from '../../../../hooks';

import Button from '../../../Button';

const Completed = () => {
  const { clearGame } = useStore('gameStore');
  const { setCurrentPage } = useStore('global');

  const handleExit = () => {
    setCurrentPage('menu');
    clearGame();
  };

  return (
    <View>
      <Button onPress={handleExit} color="primary" text="FINISH" />
    </View>
  );
};

export default Completed;

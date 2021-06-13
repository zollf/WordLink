import React from 'react';
import { View } from 'react-native';
import { useStore } from 'app/src/hooks';

import Button from 'app/src/components/Button';

const Completed = () => {
  const { clearGame } = useStore('gameStore');
  const { setCurrentPage } = useStore('global');

  const handleExit = () => {
    setCurrentPage('menu');
    clearGame();
  };

  return (
    <View>
      <Button data-test-id="exit-button" onPress={handleExit} color="orange" text="FINISH" />
    </View>
  );
};

export default Completed;
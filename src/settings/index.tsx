import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';

import { useStore } from 'app/hooks';
import { MenuBar, Button } from 'app/components';

import styles from './styles';

const Settings = () => {
  const { setStartingPage, setCurrentPage } = useStore('global');

  const handleClick = () => {
    setCurrentPage('menu');
    setStartingPage(true);
  };

  return (
    <View style={styles.settings}>
      <Button text="Back" onPress={handleClick} />
      <MenuBar />
    </View>
  );
};

export default observer(Settings);

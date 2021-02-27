import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';

import { useStore } from 'app/hooks';
import { MenuBar, Button } from 'app/components';

import styles from './styles';

import _saveData from 'app/lib/saveData';
import _getData from 'app/lib/getData';

const Settings = () => {
  const { setStartingPage, setCurrentPage, setUserInfo } = useStore('global');

  const handleClick = () => {
    setCurrentPage('menu');
    setStartingPage(true);
  };

  const resetUser = async () => {
    await _saveData(null);
    await _getData()
      .then((v) => {
        if (v.success) {
          setUserInfo(JSON.parse(v.value));
        }
      })
      .catch();
    setStartingPage(true);
  };

  return (
    <View style={styles.settings}>
      <Button text="Back" onPress={handleClick} />
      <Button text="Reset Data" onPress={resetUser} color={'red'} />
      <MenuBar />
    </View>
  );
};

export default observer(Settings);

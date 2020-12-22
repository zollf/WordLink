import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from '../../hooks';

import { MenuBar, LevelButtons, LevelSelect } from '../../components';

import styles from './styles';

const Menu = () => {
  const { 
    currentDifficultyOpen, 
  } = useStore('global');

  return (
    <View style={styles.menu}>
      <Text style={styles.text}>Level Select</Text>
      {!currentDifficultyOpen ? (
        <LevelButtons />
      ) : (
        <LevelSelect />
      )}
      <MenuBar />
    </View>
  );
};

export default observer(Menu);
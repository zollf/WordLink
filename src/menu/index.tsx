import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from 'app/hooks';

import { MenuBar, LevelButtons, LevelSelect, CircleButton } from 'app/components';

import styles from './styles';

const Menu = () => {
  const { setCurrentDifficultyOpen, currentDifficultyOpen } = useStore('global');

  return (
    <View style={styles.menu}>
      {!currentDifficultyOpen ? (
        <>
          <Text style={styles.text}>Level Select</Text>
          <LevelButtons />
          <MenuBar />
        </>
      ) : (
        <>
          <LevelSelect />
          <View style={styles.back}>
            <CircleButton overrideCallback={() => setCurrentDifficultyOpen('')} />
          </View>
        </>
      )}
    </View>
  );
};

export default observer(Menu);

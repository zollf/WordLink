import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';

import { MenuBar, LevelButtons } from '../../components';

import styles from './styles';

const Menu = () => {
  return (
    <View style={styles.menu}>
      <Text style={styles.text}>Level Select</Text>
      <LevelButtons />
      <MenuBar />
    </View>
  );
};

export default observer(Menu);
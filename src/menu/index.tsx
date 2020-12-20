import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';

import { MenuBar, Button } from '../../components';

import styles from './styles';

const Menu = () => {
  return (
    <View style={styles.menu}>
      <Button text="EASY" color="green" onPress={() => ({})}/>
      <MenuBar />
    </View>
  );
};

export default observer(Menu);
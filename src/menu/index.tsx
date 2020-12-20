import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';

import { MenuBar } from '../../components';

import styles from './styles';

const Menu = () => {
  return (
    <View style={styles.menu}>
      <MenuBar />
    </View>
  );
};

export default observer(Menu);
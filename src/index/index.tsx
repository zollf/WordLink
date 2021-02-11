import React from 'react';
import { View } from 'react-native';

import { observer } from 'mobx-react';

import { MenuBar } from '../../components';

import styles from './styles';

const Index = () => {
  return (
    <View style={styles.container}>
      <MenuBar />
    </View>
  );
};

export default observer(Index);

import React from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';

import { MenuBar } from '../../components';

import styles from './styles';

const Profile = () => {
  return (
    <View style={styles.profile}>
      <Text>Profile</Text>
      <MenuBar />
    </View>
  );
};

export default observer(Profile);
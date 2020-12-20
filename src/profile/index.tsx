import React from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';

import { MenuBar } from '../../components';

import styles from './styles';

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={styles.content}>
        <Text>Profile</Text>
      </View>
      <MenuBar />
    </View>
  );
};

export default observer(Profile);
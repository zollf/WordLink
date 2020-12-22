import React from 'react';
import { View } from 'react-native';
import { NewUserPage, MenuBar } from '../../components';

import styles from './styles';

const Welcome = () => {
  return (
    <View style={styles.welcome}>
      
      <NewUserPage />
      <MenuBar />
    </View>
  );
};

export default Welcome;
import React from 'react';
import { View } from 'react-native';
import { NewUserPage, RegisteredUserPage } from '../../components';

import styles from './styles';

const Welcome = () => {
  const registered = true;

  return <View style={styles.welcome}>{registered ? <RegisteredUserPage /> : <NewUserPage />}</View>;
};

export default Welcome;

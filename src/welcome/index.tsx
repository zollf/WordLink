import React from 'react';
import { View } from 'react-native';
import { NewUserPage, RegisteredUserPage } from 'app/components';
import { useStore } from '../../hooks';

import styles from './styles';

const Welcome = () => {
  const { userInfo } = useStore('global');
  return <View style={styles.welcome}>{userInfo !== 'null' ? <RegisteredUserPage /> : <NewUserPage />}</View>;
};

export default Welcome;

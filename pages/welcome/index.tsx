import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';

import { NewUserPage, RegisteredUserPage } from 'app/components';
import { useStore } from 'app/hooks';
import styles from './styles';

const Welcome = () => {
  const global = useStore('global');
  return <View style={styles.welcome}>{global.userInfo ? <RegisteredUserPage /> : <NewUserPage />}</View>;
};

export default observer(Welcome);

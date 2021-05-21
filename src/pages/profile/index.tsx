import React from 'react';
import { View, Image, Text } from 'react-native';
import { observer } from 'mobx-react';
import { LinearGradient } from 'expo-linear-gradient';

import { MenuBar, UserStats } from 'app/src/components';
import { useStore } from 'app/src/hooks';
import Avatar from 'app/src/images/icons/AVATAR.png';

import AppStyle from 'app/src/styles';
import styles from './styles';

const Profile = () => {
  const { userInfo } = useStore('global');

  return (
    <View style={styles.container}>
      <View style={styles.stats}>
        <LinearGradient
          colors={[AppStyle.orange, AppStyle.blue]}
          start={[0.025, 0.2]}
          locations={[0.5, 0.5]}
          style={styles.user}
        >
          <Image source={Avatar} style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.username}>{userInfo.username}</Text>
            <Text style={styles.level}>{`Level ${userInfo.level}`}</Text>
          </View>
        </LinearGradient>
        <UserStats />
      </View>
      <MenuBar />
    </View>
  );
};

export default observer(Profile);

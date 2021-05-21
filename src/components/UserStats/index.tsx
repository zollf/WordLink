import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import { widthPercentageToDP } from 'react-native-responsive-screen';

import InputField from '../InputField';
import { useStore } from 'app/src/hooks';
import styles from './styles';

const UserStats = () => {
  const { userInfo } = useStore('global');

  return (
    <View style={styles.container}>
      <View style={styles.stats}>
        <Text>Username</Text>
        <InputField color="blue" value={userInfo.username} />
      </View>
      <View style={[styles.stats, styles.statsContainer]}>
        <View style={{ marginRight: widthPercentageToDP('5%') }}>
          <Text>Points</Text>
          <InputField color="orange" value={`${userInfo.points}`} size="small" />
        </View>
        <View>
          <Text>Completed</Text>
          <InputField color="orange" value={`${userInfo.puzzles.completed}`} size="small" />
        </View>
      </View>
    </View>
  );
};

export default observer(UserStats);

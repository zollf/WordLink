import React from 'react';
import { View, Text } from 'react-native';
import InputField from '../InputField';

import { widthPercentageToDP } from 'react-native-responsive-screen';

import styles from './styles';

const UserStats = () => {
  return (
    <View style={styles.container}>
      <View style={styles.stats}>
        <Text>Username</Text>
        <InputField color="blue" staticValue={'Fartman123'} />
      </View>
      <View style={[styles.stats, styles.statsContainer]}>
        <View style={{ marginRight: widthPercentageToDP('5%') }}>
          <Text>Points</Text>
          <InputField color="orange" staticValue={'0'} size="small" />
        </View>
        <View>
          <Text>Completed</Text>
          <InputField color="orange" staticValue={'0'} size="small" />
        </View>
      </View>
    </View>
  );
};

export default UserStats;

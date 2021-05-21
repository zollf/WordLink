import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';

import InputField from '../InputField';
import { useStore } from 'app/src/hooks';
import styles from './styles';

const UserStats = () => {
  const { userInfo } = useStore('global');

  return (
    <View style={styles.container}>
      <View style={styles.stat}>
        <Text>Completed Levels</Text>
        <InputField color="blue" value={`${userInfo.puzzles.completed}`} size="small" />
      </View>
      <View style={styles.stat}>
        <Text>Stars Earnt</Text>
        <InputField color="blue" value={`${userInfo.starsEarnt}`} size="small" />
      </View>
      <View style={styles.stat}>
        <Text>Hints used</Text>
        <InputField color="blue" value={`${userInfo.hintsUsed}`} size="small" />
      </View>
      <View style={styles.stat}>
        <Text>Hardest Difficulty</Text>
        <InputField color="blue" value={userInfo.hardestDifficulty} size="small" />
      </View>
    </View>
  );
};

export default observer(UserStats);

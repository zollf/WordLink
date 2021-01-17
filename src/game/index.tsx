import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';

import { Game as WordLink } from '../../components';

import styles from './styles';

const Game = () => (
  <View style={styles.game}>
    <WordLink />
  </View>
);

export default observer(Game);
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { observer } from 'mobx-react';

import styles from './styles';

interface Props {
  title: string;
  onPress: () => void;
  active: boolean;
}

const MenuItem = ({ title, onPress, active }: Props ) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.menuItem, active ? styles.active : styles.notActive]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default observer(MenuItem);
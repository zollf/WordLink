import React from 'react';
import { View } from 'react-native';

import styles from './styles';

interface Props {
  children: React.ReactNode;
}

const Shadow = ({ children }: Props) => {
  return <View style={styles.shadow}>{children}</View>;
};

export default Shadow;

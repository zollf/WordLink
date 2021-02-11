import React from 'react';
import { TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { observer } from 'mobx-react';

import styles from './styles';

interface Props {
  onPress: () => void;
  active: boolean;
  icon: ImageSourcePropType;
}

const MenuItem = ({ onPress, active, icon }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.menuItem, active ? styles.active : styles.notActive]}>
      <Image source={icon} style={styles.image} />
    </TouchableOpacity>
  );
};

export default observer(MenuItem);

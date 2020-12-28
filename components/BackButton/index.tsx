import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useStore } from '../../hooks';

import AppStyle from '../../styles';
import styles from './styles';

interface Props {
  color: string;
}

const Button = ({ color }: Props) => {
  const { setCurrentPage } = useStore('global');
  return (
    <TouchableOpacity data-test-id="button" onPress={() => setCurrentPage('menu')} style={[styles.button, {
      backgroundColor: AppStyle[color],
    }]}>
    </TouchableOpacity>
  );
};

export default Button;
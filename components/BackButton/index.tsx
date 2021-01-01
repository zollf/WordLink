import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useStore } from '../../hooks';
import arrow from '../../images/left-arrow.png';

import AppStyle from '../../styles';
import styles from './styles';

interface Props {
  color: string;
  overrideCallback?: () => void;
}

const Button = ({ color, overrideCallback }: Props) => {
  const { setCurrentPage } = useStore('global');

  const handleClick = () => {
    if (overrideCallback) {
      overrideCallback();
    } else {
      setCurrentPage('menu');
    }
  };

  return (
    <TouchableOpacity data-test-id="button" onPress={handleClick} style={[styles.button, {
      backgroundColor: AppStyle[color],
    }]}>
      <Image style={styles.arrow} source={arrow} />
    </TouchableOpacity>
  );
};

export default Button;
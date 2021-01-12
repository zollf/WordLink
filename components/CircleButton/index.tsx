import React from 'react';
import { TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { useStore } from '../../hooks';
import arrow from '../../images/left-arrow.png';
import close from '../../images/close.png';

import AppStyle from '../../styles';
import styles from './styles';

interface Props {
  color: string;
  overrideCallback?: () => void;
  symbol?: 'exit' | 'arrow'
}

const Button = ({ color, overrideCallback, symbol }: Props) => {
  const { setCurrentPage } = useStore('global');

  const handleClick = () => {
    if (overrideCallback) {
      overrideCallback();
    } else {
      setCurrentPage('menu');
    }
  };

  const image = () => {
    if (symbol) {
      if (symbol === 'exit') {
        return close;
      } else if (symbol === 'arrow') {
        return arrow;
      }
    } else {
      return arrow;
    }
  };

  return (
    <TouchableOpacity data-test-id="button" onPress={handleClick} style={[styles.button, {
      backgroundColor: AppStyle[color],
    }]}>
      <Image style={styles.arrow} source={image()} />
    </TouchableOpacity>
  );
};

export default Button;
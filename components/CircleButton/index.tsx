import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useStore } from '../../hooks';
import arrow from '../../images/left-arrow.png';
import close from '../../images/close.png';

import AppStyle from '../../styles';
import styles from './styles';

interface Props {
  overrideCallback?: () => void;
  symbol?: 'exit' | 'arrow';
}

const Button = ({ overrideCallback, symbol }: Props) => {
  const { setCurrentPage } = useStore('global');

  const handleClick = () => {
    if (overrideCallback) {
      overrideCallback();
    } else {
      setCurrentPage('menu');
    }
  };

  const image = () => {
    switch (symbol) {
      case 'exit':
        return close;
      case 'arrow':
        return arrow;
      default:
        return arrow;
    }
  };

  return (
    <TouchableOpacity data-test-id="button" onPress={handleClick}>
      <LinearGradient
        colors={[AppStyle.lightBlue, AppStyle.blue]}
        style={styles.button}
        locations={[0.5, 0.5]}
        start={[-0.1, 0.1]}
      >
        <Image style={styles.arrow} source={image()} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

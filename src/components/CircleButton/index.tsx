import React, { useMemo } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useStore } from 'app/src/hooks';
import arrow from 'app/src/images/left-arrow.png';
import close from 'app/src/images/close.png';

import AppStyle from 'app/src/styles';
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

  const image = useMemo(() => {
    const images = {
      exit: close,
      arrow: arrow,
    };

    return symbol ? images[symbol] : arrow;
  }, []);

  return (
    <TouchableOpacity data-test-id="circle-button" onPress={handleClick}>
      <LinearGradient
        colors={[AppStyle.lightBlue, AppStyle.blue]}
        style={styles.button}
        locations={[0.5, 0.5]}
        start={[-0.1, 0.1]}
      >
        <Image style={styles.arrow} source={image} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

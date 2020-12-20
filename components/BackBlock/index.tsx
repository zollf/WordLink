import React, { useEffect, useState } from 'react';
import { View, Text, Animated, LayoutAnimation } from 'react-native';
import { observer } from 'mobx-react';

import { useStore } from '../../hooks';

import styles from './styles';

const BackBlock = () => {
  const { currentPage, previousPage } = useStore('global');

  const calcX = (page: string) => {
    switch (page) {
      case 'index':
        return 10;
      case 'menu':
        return (212/2)-25.5;
      case 'profile':
        return 150;
      default:
        return 0;
    }
  }

  const [posX, setPosX] = useState(calcX(previousPage));

  useEffect(() => {
    LayoutAnimation.configureNext({ 
      duration: 200, 
      update: { type: 'spring', springDamping: 0.9 }, 
    });
    setPosX(calcX(currentPage));
  }, [currentPage]);

  return (
    <Animated.View style={[styles.block, {
      left: posX
    }]} />
  )
}

export default observer(BackBlock);
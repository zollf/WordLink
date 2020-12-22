import React, { useEffect, useState } from 'react';
import { Animated, LayoutAnimation } from 'react-native';
import { observer } from 'mobx-react';

import { useStore } from '../../hooks';

import styles from './styles';

interface Pages {
  [key: string] : number,
}

const BackBlock = () => {
  const { currentPage, previousPage } = useStore('global');

  const pages: Pages = {
    'welcome': 10,
    'menu': (212/2)-25.5,
    'profile': 150,
  };

  const [posX, setPosX] = useState(pages[previousPage]);

  useEffect(() => {
    LayoutAnimation.configureNext({ 
      duration: 200, 
      update: { type: 'spring', springDamping: 0.9 }, 
    });
    setPosX(pages[currentPage]);
  }, [currentPage]);

  return (
    <Animated.View style={[styles.block, {
      left: posX
    }]} />
  );
};

export default observer(BackBlock);
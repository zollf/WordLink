import React, { useEffect, useState } from 'react';
import { Animated, LayoutAnimation } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { observer } from 'mobx-react';

import { useStore } from 'app/hooks';

import AppStyle from 'app/styles';
import styles from './styles';

const BackBlock = () => {
  const { currentPage, previousPage } = useStore('global');

  const [posX, setPosX] = useState(BackBlock.pages[previousPage]);

  useEffect(() => {
    LayoutAnimation.configureNext({
      duration: 200,
      update: { type: 'spring', springDamping: 0.9 },
    });
    setPosX(BackBlock.pages[currentPage]);
  }, [currentPage]);

  return (
    <Animated.View
      style={[
        styles.block,
        {
          left: posX,
        },
      ]}
    >
      <LinearGradient colors={[AppStyle.lightGreen, AppStyle.green]} style={styles.block} />
    </Animated.View>
  );
};

BackBlock.pages = {
  profile: 10,
  menu: 212 / 2 - 25.5,
  settings: 150,
};

export default observer(BackBlock);

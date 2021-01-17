import React, { useState, useEffect } from "react";
import { ImageBackground } from 'react-native';
import { Provider, observer } from 'mobx-react';
import { configure } from "mobx";
import { global, gameStore } from './stores';

import _getData from './lib/getData';
import { Index, Menu, Welcome, Profile, Game } from './src';
import { useFonts, Raleway_400Regular, Raleway_700Bold } from '@expo-google-fonts/raleway';

import image from './images/background.png';

import styles from './styles/main';

configure({ enforceActions: 'observed' });

const App = () => {
  const [, setData] = useState({});

  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold,
  });

  useEffect(() => {
    _getData().then((v) => {
      if (v.success) {
        setData(v.value);
      }
    });
  }, []);
    
  const pages: Pages = {
    'index': <Index />,
    'menu': <Menu />,
    'welcome': <Welcome />,
    'profile': <Profile />,
    'game': <Game />,
  };

  return (
    <Provider global={global} gameStore={gameStore}>
      <ImageBackground source={image} style={styles.image}>
        {fontsLoaded && pages[global.currentPage]}
      </ImageBackground>
    </Provider>
  );
};

export default observer(App);

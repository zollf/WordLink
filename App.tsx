import React, { useState, useEffect } from "react";
import { ImageBackground } from 'react-native';
import { Provider, observer } from 'mobx-react';
import { configure } from "mobx";
import AppLoading from 'expo-app-loading';
import { global } from './stores';

import _getData from './lib/getData';
import { Index, Menu, Welcome, Profile, Game } from './src';
import { useFonts, Raleway_400Regular } from '@expo-google-fonts/raleway';

import image from './images/background.png';

import styles from './styles/main';

configure({ enforceActions: 'observed' });

const App = () => {
  const [data, setData] = useState({});

  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
  });

  useEffect(() => {
    _getData().then((v) => {
      if (v.success) {
        setData(v.value);
      }
    });
  }, []);
    
  const pages = {
    'index': <Index />,
    'menu': <Menu />,
    'welcome': <Welcome />,
    'profile': <Profile />,
    'game': <Game />,
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider global={global}>
      <ImageBackground source={image} style={styles.image}>
        {pages[global.currentPage]}
      </ImageBackground>
    </Provider>
  );
};

export default observer(App);

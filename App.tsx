import React, { useEffect, useMemo, useState } from 'react';
import { ImageBackground } from 'react-native';
import { Raleway_400Regular, Raleway_700Bold, useFonts } from '@expo-google-fonts/raleway';
import { configure } from 'mobx';
import { Provider, observer } from 'mobx-react';

import { gameStore, global } from './stores';
import _getData from './lib/getData';
import { Game, Index, Menu, Profile, Welcome, Settings } from './src';
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

  const loadPage = useMemo(() => {
    const pages: Pages = {
      index: <Index />,
      menu: <Menu />,
      profile: <Profile />,
      game: <Game />,
      settings: <Settings />,
    };

    if (global.onStartingPage) {
      return <Welcome />;
    } else {
      return pages[global.currentPage];
    }
  }, [global.onStartingPage, global.currentPage]);

  return (
    <Provider global={global} gameStore={gameStore}>
      <ImageBackground source={image} style={styles.image}>
        {fontsLoaded && loadPage}
      </ImageBackground>
    </Provider>
  );
};

export default observer(App);

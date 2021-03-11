import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { Raleway_400Regular, Raleway_700Bold, useFonts } from '@expo-google-fonts/raleway';
import { configure } from 'mobx';
import { Provider, observer } from 'mobx-react';

import { gameStore, global } from './stores';
import _getData from './lib/getData';
import { Game, Index, Menu, Profile, Welcome, Settings } from './pages';
import image from './images/background.png';

import styles from './styles/main';

configure({ enforceActions: 'observed' });

const App = () => {
  const [_ready, _setReady] = useState(false);
  const [fontsLoaded] = useFonts({ Raleway_400Regular, Raleway_700Bold });

  const _initialProps = async () => {
    const data = await _getData();
    if (!data) throw new Error('Error occurred on initial load');
    global.setUserInfo(JSON.parse(data.value));
    _setReady(true);
  };

  if (!_ready || !fontsLoaded) {
    _initialProps();
    return null;
  }

  return (
    <Provider global={global} gameStore={gameStore}>
      <ImageBackground source={image} style={styles.image}>
        {global.onStartingPage ? App.pages.welcome : App.pages[global.currentPage]}
      </ImageBackground>
    </Provider>
  );
};

// Pages only come from src
App.pages = {
  index: <Index />,
  menu: <Menu />,
  profile: <Profile />,
  game: <Game />,
  settings: <Settings />,
  welcome: <Welcome />,
} as const;

export default observer(App);

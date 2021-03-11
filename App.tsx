import React from 'react';
import { ImageBackground } from 'react-native';
import { Raleway_400Regular, Raleway_700Bold, useFonts } from '@expo-google-fonts/raleway';
import { configure } from 'mobx';
import { Provider, observer } from 'mobx-react';

import { gameStore, global } from 'app/stores';
import { Game, Index, Menu, Profile, Welcome, Settings } from './src';
import image from './images/background.png';

import styles from './styles/main';

configure({ enforceActions: 'observed' });

const App = () => {
  const [fontsLoaded] = useFonts({ Raleway_400Regular, Raleway_700Bold });
  const _init = async () => {
    await global.init();
  };

  if (!global._ready || !fontsLoaded) {
    if (!global._ready) _init();
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

App.pages = {
  index: <Index />,
  menu: <Menu />,
  profile: <Profile />,
  game: <Game />,
  settings: <Settings />,
  welcome: <Welcome />,
};

export default observer(App);

import React, { useState, useEffect } from "react";
import { ImageBackground } from 'react-native';
import { Provider, observer } from 'mobx-react'
import { configure } from "mobx";
import { global } from './stores';

import _getData from './lib/getData';
import { Index, Menu, Welcome, Profile } from './src';

import image from './images/background.png';

import styles from './styles/main';

configure({ enforceActions: 'observed' });

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    _getData().then((v) => {
      if (v.success) {
        setData(v.value);
      }
    });
  }, []);
    
  const render = () => {
    switch (global.currentPage) {
      case 'index':
        return <Index />;
      case 'menu':
        return <Menu />;
      case 'welcome':
        return <Welcome />;
      case 'profile':
        return <Profile />;
      default:
        return null;
    }
  }

  return (
    <Provider global={global}>
      <ImageBackground source={image} style={styles.image}>
        {render()}
      </ImageBackground>
    </Provider>
  );
}

export default observer(App);

import React, { useState, useEffect } from "react";
import { ImageBackground } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Index, Menu, Welcome, Profile } from './src';

import Background from './images/background.png';

import styles from './styles/main';

const App = () => {
  const currentPage: string = 'index';
  const image = { uri: Background };
  
  const [data, setData] = useState({});
  useEffect(() => {
    const _getData = async () => {
      try {
        const value = await AsyncStorage.getItem("@storage_Key");
        setData(value !== null ? value : {});
      } catch (e) {
        console.log("testing");
      }
    };
    _getData();
  }, []);
    
  const render = () => {
    switch (currentPage) {
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
    <ImageBackground source={Background} style={styles.image}>
      {render()}
    </ImageBackground>
  );
}

export default App;

import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { observer } from 'mobx-react';

import { useStore } from '../../hooks';
import MenuItem from '../MenuItem';
import BackBlock from '../BackBlock';

import setting from '../../images/icons/SETTING.png';
import avatar from '../../images/icons/AVATAR.png';
import gamepad from '../../images/icons/GAMEPAD.png';

import AppStyle from '../../styles';
import styles from './styles';

const MenuBar = () => {
  const { setCurrentPage, currentPage, setCurrentDifficultyOpen } = useStore('global');

  const handleMenuClick = () => {
    setCurrentPage('menu');
    setCurrentDifficultyOpen('');
  };
 
  return (
    <View data-test-id="wrapper" style={styles.wrapper}>
      <LinearGradient 
        colors={[AppStyle.lightGrey, AppStyle.grey]} 
        locations={[0.5, 0.5]} start={[-0.1, 0.1]} 
        data-test-id="menu-bar" 
        style={styles.menuBar}
      >
        <MenuItem active={currentPage === "welcome"} icon={avatar} onPress={() => setCurrentPage('welcome')} data-test-id="menu-index"/>
        <MenuItem active={currentPage === "menu"} icon={gamepad} onPress={handleMenuClick} data-test-id="menu-menu"/>
        <MenuItem active={currentPage === "profile"} icon={setting} onPress={() => setCurrentPage('profile')} data-test-id="menu-profile"/>
        <BackBlock />
      </LinearGradient>
    </View>
  );
};

export default observer(MenuBar);
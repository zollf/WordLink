import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';

import { useStore } from '../../hooks';
import MenuItem from '../MenuItem';
import BackBlock from '../BackBlock';

import home from '../../images/home.png';
import avatar from '../../images/avatar.png';
import gamepad from '../../images/gamepad.png';

import styles from './styles';

const MenuBar = () => {
  const { setCurrentPage, currentPage, setCurrentDifficultyOpen } = useStore('global');

  const handleMenuClick = () => {
    setCurrentPage('menu');
    setCurrentDifficultyOpen('');
  };
 
  return (
    <View data-test-id="wrapper" style={styles.wrapper}>
      <View data-test-id="menu-bar" style={styles.menuBar}>
        <MenuItem active={currentPage === "welcome"} icon={home} onPress={() => setCurrentPage('welcome')} data-test-id="menu-index"/>
        <MenuItem active={currentPage === "menu"} icon={gamepad} onPress={handleMenuClick} data-test-id="menu-menu"/>
        <MenuItem active={currentPage === "profile"} icon={avatar} onPress={() => setCurrentPage('profile')} data-test-id="menu-profile"/>
        <BackBlock />
      </View>
    </View>
  );
};

export default observer(MenuBar);
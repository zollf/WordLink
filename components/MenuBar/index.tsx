import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';

import { useStore } from '../../hooks';
import MenuItem from '../MenuItem';

import styles from './styles';

const MenuBar = () => {
  const { setCurrentPage, currentPage } = useStore('global');
  return (
    <View data-test-id="wrapper" style={styles.wrapper}>
      <View data-test-id="menu-bar" style={styles.menuBar}>
        <MenuItem active={currentPage === "index"} title="Home" onPress={() => setCurrentPage('index')} data-test-id="menu-index"/>
        <MenuItem active={currentPage === "menu"} title="Play" onPress={() => setCurrentPage('menu')} data-test-id="menu-menu"/>
        <MenuItem active={currentPage === "profile"}title="Profile" onPress={() => setCurrentPage('profile')} data-test-id="menu-profile"/>
      </View>
    </View>
  )
}

export default observer(MenuBar);
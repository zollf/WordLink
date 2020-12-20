import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';

import { useStore } from '../../hooks';
import MenuItem from '../MenuItem';

import styles from './styles';

const MenuBar = () => {
  const { setCurrentPage, currentPage } = useStore('global');
  return (
    <View style={styles.wrapper}>
      <View style={styles.menuBar}>
        <MenuItem active={currentPage === "index"} title="Home" onPress={() => setCurrentPage('index')}/>
        <MenuItem active={currentPage === "menu"} title="Play" onPress={() => setCurrentPage('menu')}/>
        <MenuItem active={currentPage === "profile"}title="Profile" onPress={() => setCurrentPage('profile')}/>
      </View>
    </View>
  )
}

export default observer(MenuBar);
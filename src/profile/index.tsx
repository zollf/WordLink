import React from "react";
import { Text, View } from "react-native";
import { observer } from "mobx-react";

import { MenuBar, Button, UserStats, UserPuzzleStats } from "../../components";

import styles from "./styles";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.stats}>
        <UserStats />
        <UserPuzzleStats />
      </View>
      <MenuBar />
    </View>
  );
};

export default observer(Profile);

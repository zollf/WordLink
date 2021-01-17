import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react";

import { MenuBar, UserStats, UserPuzzleStats } from "../../components";

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

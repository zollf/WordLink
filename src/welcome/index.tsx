import React from "react";
import { View } from "react-native";
import { NewUserPage, MenuBar, RegisteredUserPage } from "../../components";

import styles from "./styles";

const Welcome = () => {
  const registered: boolean = true;

  return (
    <View style={styles.welcome}>
      {registered ? <RegisteredUserPage /> : <NewUserPage />}
      <MenuBar />
    </View>
  );
};

export default Welcome;

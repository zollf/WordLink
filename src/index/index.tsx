import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

const Index = (props) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>{JSON.stringify(props.Data)}</Text>
    </View>
  );
};

export default Index;

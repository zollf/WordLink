import React from "react";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import AppStyle from "../../styles";

const Logo = () => {
  return (
    <LinearGradient
      colors={[AppStyle.orange, AppStyle.blue]}
      start={[-0.2, 0.1]}
      locations={[0.7, 0.7]}
      style={styles.logo}
    >
      <Text style={[styles.text, { marginRight: "2.5%" }]}>WORD</Text>
      <Text style={[styles.text, { marginLeft: "25%" }]}>LINK</Text>
    </LinearGradient>
  );
};

export default Logo;

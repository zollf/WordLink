import React from "react";
import { Text } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import Styles from "./styles";
import AppStyle from "../../styles";

const Logo = () => {
  return (
    <LinearGradient
      colors={[AppStyle.orange, AppStyle.blue]}
      start={[0, 0.4]}
      locations={[0.5, 0.5]}
      style={Styles.logo}
    >
      <Text style={[Styles.text, { marginRight: "10%" }]}>WORD</Text>
      <Text style={[Styles.text, { marginLeft: "25%" }]}>LINK</Text>
    </LinearGradient>
  );
};

export default Logo;

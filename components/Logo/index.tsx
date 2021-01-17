import React from "react";
import { View, Text } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { widthPercentageToDP } from "react-native-responsive-screen";

import LogoStyles from "./styles";
import AppStyle from "../../styles";

const Logo = () => {
  return (
    <LinearGradient
      colors={[AppStyle.orange, AppStyle.blue]}
      start={[0, 0.4]}
      locations={[0.5, 0.5]}
      style={LogoStyles.logo}
    >
      <Text style={[LogoStyles.text, { marginRight: "10%" }]}>WORD</Text>
      <Text style={[LogoStyles.text, { marginLeft: "25%" }]}>LINK</Text>
    </LinearGradient>
  );
};

export default Logo;

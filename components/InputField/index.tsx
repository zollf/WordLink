import React, { useState } from "react";
import { TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { widthPercentageToDP } from "react-native-responsive-screen";

import InputFieldStyles from "./styles";
import AppStyle from "../../styles";

interface Props {
  color: "orange" | "blue";
  staticValue: string;
  size?: "small" | "full";
}

const InputField = ({ color, staticValue = "", size = "full" }: Props) => {
  const [value, setValue] = useState("");

  const sizes = {
    full: "60%",
    small: "27.5%",
  };
  const getGradientProps = () => {
    switch (size) {
      case "full":
        return { start: [0.2, 0.2], locations: [0.4, 0.4] };
      case "small":
        return { start: [0, 0.5], locations: [0.5, 0.5] };
    }
  };
  return (
    <LinearGradient
      colors={[AppStyle.lightBlue, AppStyle.blue]}
      start={getGradientProps().start}
      locations={getGradientProps().locations}
      style={[
        InputFieldStyles.gradient,
        {
          width: widthPercentageToDP(sizes[size]),
          backgroundColor: AppStyle[color],
        },
      ]}
    >
      <TextInput
        data-test-id="text-input"
        editable={!staticValue}
        selectTextOnFocus={!staticValue}
        onChange={(e) => setValue(e.nativeEvent?.text)}
        value={staticValue || value}
        style={InputFieldStyles.text}
      />
    </LinearGradient>
  );
};

export default InputField;

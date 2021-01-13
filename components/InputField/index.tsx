import React, { useState } from "react";
import { TextInput } from "react-native";

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
  return (
    <TextInput
      data-test-id="text-input"
      editable={!staticValue}
      selectTextOnFocus={!staticValue}
      onChange={(e) => setValue(e.nativeEvent?.text)}
      value={staticValue || value}
      style={[
        InputFieldStyles.input,
        {
          width: widthPercentageToDP(sizes[size]),
          backgroundColor: AppStyle[color],
        },
      ]}
    />
  );
};

export default InputField;

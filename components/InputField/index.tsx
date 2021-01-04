import React, { useState } from "react";
import {
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";

import { widthPercentageToDP } from "react-native-responsive-screen";

import InputFieldStyles from "./styles";
import AppStyle from "../../styles";

interface Props {
  color: "orange" | "blue";
  input: boolean;
  value?: string | null;
  size?: "small" | "full";
}

interface SizeSelector {
  [element: string]: string;
}

const InputField = ({ color, input, value = null, size = "full" }: Props) => {
  const [user, setUser] = useState("SampleUsername");

  const handleChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setUser(event.nativeEvent?.text);
  };

  const sizes: SizeSelector = {
    full: "60%",
    small: "27.5%",
  };
  return (
    <TextInput
      data-test-id="text-input"
      editable={input}
      selectTextOnFocus={input}
      onChange={handleChange}
      value={value ? value : user}
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

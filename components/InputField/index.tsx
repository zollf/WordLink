import React, { useState } from "react";
import {
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import InputFieldStyles from "./styles";
import AppStyle from "../../styles";

interface Props {
  color: "orange" | "blue";
  input: boolean;
  value: string | null;
}

const InputField = ({ color, input, value = null }: Props) => {
  const [user, setUser] = useState("SampleUsername");
  const handleChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setUser(event.nativeEvent?.text);
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
          backgroundColor: AppStyle[color],
        },
      ]}
    />
  );
};

export default InputField;

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import InputFieldStyles from "./styles";
import AppStyle from "../../styles";

interface Props {
  color: "orange" | "blue";
}

const InputField = ({ color }: Props) => {
  const [user, setUser] = useState("SampleUsername");
  const handleChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setUser(event.nativeEvent.text);
  };

  const styleColor = StyleSheet.create({
    color: {
      backgroundColor: AppStyle[color],
    },
  });

  return (
    <TextInput
      onChange={handleChange}
      value={user}
      style={[InputFieldStyles.input, styleColor.color]}
    />
  );
};

export default InputField;

import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import InputFieldStyles from "./styles";
import AppStyle from "../../styles";

interface Props {
  color: "orange" | "blue";
}

const InputField = ({ color }: Props) => {
  const [user, setUser] = useState("SampleUsername");
  const handleChange = ({ target }: any) => {
    setUser(target.value);
  };

  const selectColor = () => {
    switch (color) {
      case "orange":
        return AppStyle.orange;
      case "blue":
        return AppStyle.blue;
      case "green":
        return AppStyle.green;
      default:
        return AppStyle.lightGrey;
    }
  };
  const styleColor = StyleSheet.create({
    color: {
      backgroundColor: selectColor(),
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

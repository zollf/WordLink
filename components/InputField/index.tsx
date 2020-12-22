import React, { useState } from "react";
import { TextInput, NativeSyntheticEvent, TextInputChangeEventData} from "react-native";
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
    setUser(event.nativeEvent?.text);
  };

  return (
    <TextInput
      data-test-id="text-input"
      onChange={handleChange}
      value={user}
      style={[InputFieldStyles.input, {
        backgroundColor: AppStyle[color],
      }]}
    />
  );
};

export default InputField;

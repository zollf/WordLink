import React from 'react';
import { NativeSyntheticEvent, TextInput, TextInputChangeEventData } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { widthPercentageToDP } from 'react-native-responsive-screen';

import InputFieldStyles from './styles';
import AppStyle from 'app/styles';

interface Props {
  color: 'orange' | 'blue';
  value: string;
  size?: 'small' | 'full';
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

const InputField = ({ color, value = '', size = 'full', onChange = undefined }: Props) => {
  const sizes = {
    full: '60%',
    small: '27.5%',
  };
  const getGradientProps = () => {
    switch (size) {
      case 'full':
        return { start: [0.2, 0.2], locations: [0.4, 0.4] };
      case 'small':
        return { start: [0, 0.5], locations: [0.5, 0.5] };
    }
  };
  return (
    <LinearGradient
      colors={[AppStyle.lightBlue, AppStyle.blue]}
      start={getGradientProps().start as [number, number]}
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
        editable={!!onChange}
        selectTextOnFocus={!!onChange}
        onChange={onChange}
        value={value}
        style={[
          InputFieldStyles.text,
          {
            width: widthPercentageToDP(sizes[size]),
          },
        ]}
      />
    </LinearGradient>
  );
};

export default InputField;

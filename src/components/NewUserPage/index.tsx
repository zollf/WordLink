import React, { useState } from 'react';
import { Text, View, Image, NativeSyntheticEvent, TextInputChangeEventData, KeyboardAvoidingView } from 'react-native';
import { observer } from 'mobx-react';

import Button from '../Button';
import InputField from '../InputField';
import Logo from '../Logo';
import Arrow from '../../images/left-arrow.png';
import { useStore } from 'app/src/hooks';
import _saveData from 'app/src/lib/saveData';

import styles from './styles';

const NewUserPage = () => {
  const [inputVal, setInputVal] = useState('');
  const { setUserInfo, setStartingPage } = useStore('global');

  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setInputVal(e.nativeEvent?.text);
  };

  const onSubmit = async () => {
    if (!inputVal) {
      return;
    }
    const newUser: UserData = {
      username: inputVal,
      level: 1,
      points: 0,
      puzzles: {
        completed: 0,
        easy: [],
        medium: [],
        hard: [],
      },
      hintsUsed: 0,
      hardestDifficulty: 'None',
      starsEarnt: 0,
    };

    await _saveData(newUser)
      .then((v) => {
        if (v.success) {
          setStartingPage(false);
          setUserInfo(newUser);
        }
      })
      .catch();
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.header}>
        <Logo />
        <View style={styles.textWrapper}>
          <Text style={[styles.text, styles.logotext]}>Enter a Username!</Text>
        </View>
      </View>
      <Image source={Arrow} style={styles.image} />
      <View style={styles.bottom}>
        <Text>Username</Text>
        <InputField color="blue" value={inputVal} onChange={onChange} />
      </View>
      <View>
        <Button text="Continue" color="orange" onPress={onSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default observer(NewUserPage);

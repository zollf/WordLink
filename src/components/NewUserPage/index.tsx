import React, { useState } from 'react';
import { Text, View, Image, NativeSyntheticEvent, TextInputChangeEventData, KeyboardAvoidingView } from 'react-native';
import { observer } from 'mobx-react';
import { heightPercentageToDP } from 'react-native-responsive-screen';

import Button from '../Button';
import InputField from '../InputField';
import Logo from '../Logo';
import styles from './styles';
import { useStore } from 'app/src/hooks';
import _saveData from 'app/src/lib/saveData';

const NewUserPage = () => {
  const [inputVal, setInputVal] = useState('');
  const { setUserInfo, setStartingPage } = useStore('global');

  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setInputVal(e.nativeEvent?.text);
  };

  const onSubmit = async () => {
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
        <Text style={[styles.text, styles.logotext]}>TO GET LINKING ENTER A USERNAME</Text>
      </View>
      <Image source={require('../../images/left-arrow.png')} style={styles.image} />
      <View style={{ marginBottom: heightPercentageToDP('12.5%') }}>
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

import React, { useState } from 'react';
import { Text, View, Image, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { observer } from 'mobx-react';
import { heightPercentageToDP } from 'react-native-responsive-screen';

import Button from '../Button';
import InputField from '../InputField';
import Logo from '../Logo';
import styles from './styles';
import { useStore } from 'app/hooks';
import _saveData from 'app/lib/saveData';

const NewUserPage = () => {
  const [inputVal, setInputVal] = useState('');
  const { setUserInfo, setStartingPage } = useStore('global');

  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setInputVal(e.nativeEvent?.text);
  };

  const onSubmit = async () => {
    const newUser: UserData = {
      username: inputVal,
      points: 0,
      puzzles: {
        completed: 0,
        easy: [],
        medium: [],
        hard: [],
      },
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
    <View style={styles.container}>
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
    </View>
  );
};

export default observer(NewUserPage);

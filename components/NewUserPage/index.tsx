import React, { useState } from 'react';
import { Text, View, Image, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import Button from '../Button';
import InputField from '../InputField';
import Logo from '../Logo';
import styles from './styles';
import { useStore } from '../../hooks';
import _saveData from '../../lib/saveData';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const NewUserPage = () => {
  const [inputVal, setInputVal] = useState('');
  const { userInfo, setUserInfo, setCurrentPage } = useStore('global');
  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setInputVal(e.nativeEvent?.text);
  };
  const onSubmit = async () => {
    /*
      To Do:
        1) Update Async Storage ✅
        2) Update Store ✅
        3) Change page?
            - Where to>?
                Registered user page?
                  - Annoying
                Puzzle Page>
                  - most logical
    */
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
          setUserInfo(newUser);
          console.log(userInfo);
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

export default NewUserPage;

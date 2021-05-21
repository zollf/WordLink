import React from 'react';
import { Text, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { observer } from 'mobx-react';

import { useStore } from 'app/src/hooks';
import Button from '../Button';
import InputField from '../InputField';
import styles from './styles';

import Logo from '../Logo';

const RegisteredUserPage = () => {
  const { userInfo, setStartingPage } = useStore('global');

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
        <Text style={[styles.text, { fontSize: heightPercentageToDP('4%') }]}>CHALLENGE YOUR WORD LINKING SKILLS</Text>
      </View>
      <View style={{ marginBottom: heightPercentageToDP('10%') }}>
        <Text style={styles.text}>Welcome Back!</Text>
        <InputField color="blue" value={userInfo.username} />
      </View>
      <Button text="START" color="orange" onPress={() => setStartingPage(false)} />
    </View>
  );
};

export default observer(RegisteredUserPage);

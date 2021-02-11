import React from 'react';
import { View, Text, LayoutAnimation } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../../../Button';
import CircleButton from '../../../CircleButton';

import AppStyle from '../../../../styles';
import styles from './styles';

interface Props {
  close: () => void;
  exit: () => void;
}

const ExitModal = ({ close, exit }: Props) => {
  LayoutAnimation.configureNext({
    duration: 200,
    update: { type: 'spring', springDamping: 0.9 },
  });
  return (
    <>
      <View style={styles.wrapper}>
        <LinearGradient
          colors={[AppStyle.orange, AppStyle.blue]}
          style={styles.exitModal}
          locations={[0.5, 0.5]}
          start={[-0.1, 0.6]}
        >
          <View style={styles.quit}>
            <CircleButton overrideCallback={close} />
          </View>
          <Text style={styles.text}>Are you sure?</Text>
          <View style={styles.button}>
            <Button onPress={exit} text="QUIT" />
          </View>
        </LinearGradient>
      </View>
      <View style={styles.backing} />
    </>
  );
};

export default ExitModal;

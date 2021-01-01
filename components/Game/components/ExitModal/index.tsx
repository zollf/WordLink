import React from 'react';
import { View, Text, LayoutAnimation } from 'react-native';
import Button from '../../../Button';
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
        <View style={styles.exitModal}>
          <Text style={styles.text}>Are you sure you want to quit?</Text>
          <View style={styles.button}>
            <Button color="primary" onPress={exit} text="QUIT" />
          </View>
          <View style={styles.button}>
            <Button color="secondary" onPress={close} text="BACK" />
          </View>
        </View>
      </View>
      <View style={styles.backing} />
    </>
  );
};

export default ExitModal;
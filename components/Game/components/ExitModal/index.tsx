import React, { useEffect } from 'react';
import { View, Text, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from 'app/components/Button';
import CircleButton from 'app/components/CircleButton';
import { useAnimate } from 'app/hooks';

import { ElasticSlideIn, FadeSlideIn, Animate } from 'app/animations';

import AppStyle from 'app/styles';
import styles from './styles';

interface Props {
  close: () => void;
  exit: () => void;
}

const ExitModal = ({ close, exit }: Props) => {
  const [transitionTranslate, transitionOpacity] = useAnimate(-100, 0);

  useEffect(() => {
    Animated.parallel([ElasticSlideIn(transitionTranslate), FadeSlideIn(transitionOpacity)]).start();
  });

  return (
    <>
      <View style={styles.wrapper}>
        <Animate transform={transitionTranslate} opacity={transitionOpacity}>
          <LinearGradient
            colors={[AppStyle.orange, AppStyle.blue]}
            style={styles.exitModal}
            locations={[0.5, 0.5]}
            start={[-0.1, 0.6]}
          >
            <View style={styles.quit}>
              <CircleButton data-test-id="close-button" overrideCallback={close} />
            </View>
            <Text style={styles.text}>Are you sure?</Text>
            <View style={styles.button}>
              <Button data-test-id="exit-button" color="orange" onPress={exit} text="QUIT" />
            </View>
          </LinearGradient>
        </Animate>
      </View>
      <View style={styles.backing} />
    </>
  );
};

export default ExitModal;

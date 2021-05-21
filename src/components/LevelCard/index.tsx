import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useStore } from 'app/src/hooks';

import stars from 'app/src/images/icons/STAR.png';
import AppStyle, { getGradient } from 'app/src/styles';
import styles from './styles';

interface Props {
  level: Level;
  number: string;
  difficulty: string;
}

const LevelCard = ({ level, number, difficulty }: Props) => {
  const { setCurrentPage } = useStore('global');
  const { loadGame } = useStore('gameStore');

  const renderStars = () => {
    const starsArr = [];
    for (let i = 0; i < 3; i++) {
      starsArr.push(<Image key={i} source={stars} style={styles.star} />);
    }
    return starsArr;
  };

  const handleClick = () => {
    loadGame(level);
    setCurrentPage('game');
  };

  return (
    <TouchableOpacity onPress={handleClick} data-test-id="level-card">
      <LinearGradient
        colors={[AppStyle.lightGrey, AppStyle.grey]}
        style={styles.levelCard}
        locations={[0.5, 0.5]}
        start={[-0.1, 0.1]}
      >
        <LinearGradient colors={getGradient(difficulty)} start={[-0.25, 0.25]} style={styles.circle}>
          <Text style={styles.circleText}>{number}</Text>
        </LinearGradient>
        <View style={styles.words}>
          <Text style={styles.text}>{level.game.start}</Text>
          <Text style={styles.text}>{level.game.end}</Text>
        </View>
        <View
          style={[
            styles.quarterCircle,
            {
              backgroundColor: getGradient(difficulty)[1],
            },
          ]}
        />
        <View style={styles.stars}>{renderStars()}</View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LevelCard;

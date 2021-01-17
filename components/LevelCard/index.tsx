import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useStore } from '../../hooks';

import stars from '../../images/icons/STAR.png';
import AppStyle from '../../styles';
import styles from './styles';

interface Props {
  level: Level,
  number: string,
  difficulty: string,
}

const LevelCard = ({ level, number, difficulty }: Props) => {
  const { setCurrentPage } = useStore('global');
  const { loadGame } = useStore('gameStore');

  const getColors = () => {
    switch(difficulty) {
      case 'easy'   : return [AppStyle.lightGreen, AppStyle.green];
      case 'medium' : return [AppStyle.lightOrange, AppStyle.orange];
      case 'hard'   : return [AppStyle.lightRed, AppStyle.red];
      default       : return [AppStyle.lightGreen, AppStyle.green];
    }
  };

  const renderStars = () => {
    const starsArr = [];
    for(let i = 0; i < 3; i++) {
      starsArr.push(<Image key={i} source={stars} style={styles.star}/>);
    }
    return starsArr;
  };

  const handleClick = () => {
    loadGame(level);
    setCurrentPage('game');
  };

  return (
    <TouchableOpacity 
      onPress={handleClick} 
      data-test-id={`card-${number}`} 
    >
      <LinearGradient 
        colors={[AppStyle.lightGrey, AppStyle.grey]} 
        style={styles.levelCard}
        locations={[0.5, 0.5]}
        start={[-0.1, 0.1]}
      >
        <LinearGradient 
          colors={getColors()} 
          start={[-0.25, 0.25]}
          style={styles.circle}
        >
          <Text style={styles.circleText}>{number}</Text> 
        </LinearGradient>
        <View style={styles.words}>
          <Text style={styles.text}>{level.game.start}</Text> 
          <Text style={styles.text}>{level.game.end}</Text> 
        </View>
        <View style={[styles.quarterCircle, {
          backgroundColor: getColors()[1],
        }]} />
        <View style={styles.stars}>
          {renderStars()}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LevelCard;
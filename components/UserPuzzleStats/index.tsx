import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";

import { PuzzleShowCase } from "./components";

import styles from "./styles";

const UserPuzzleStats = () => {
  // ToDo:
  // - Get the users puzzle completions etc and pass state to Showcases
  //    - Possibly passed down by the profile page itself?
  //      - TO BE DECIDED
  return (
    <View>
      <Text>Puzzles Completed</Text>
      <View style={styles.PuzzleStats}>
        <PuzzleShowCase difficulty="easy" />
        <PuzzleShowCase difficulty="medium" />
        <PuzzleShowCase difficulty="hard" />
      </View>
    </View>
  );
};

export default UserPuzzleStats;

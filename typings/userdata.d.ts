interface UserData {
  username: string;
  // add image later
  points: number;
  puzzles: {
    completed: number;
    easy: Puzzle[];
    medium: Puzzle[];
    hard: Puzzle[];
  };
}

interface Puzzle {
  number: number;
  stars: number;
}

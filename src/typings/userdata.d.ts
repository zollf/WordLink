interface UserData {
  username: string;
  level: number;
  // add image later
  points: number;
  puzzles: {
    completed: number;
    easy: Puzzle[];
    medium: Puzzle[];
    hard: Puzzle[];
  };
  hintsUsed: number;
  hardestDifficulty: 'None' | 'Easy' | 'Medium' | 'Hard';
  starsEarnt: number;
}

interface Puzzle {
  number: number;
  stars: number;
}

interface Level {
  title: string;
  difficulty: string;
  game: Game;
}

interface Levels {
  [key: number]: Level;
}

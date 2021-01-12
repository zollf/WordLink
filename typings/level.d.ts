interface Level {
  title: string,
  game: Game;
}

interface Levels {
  [key: number] : Level
}
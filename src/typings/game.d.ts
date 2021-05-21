interface Game {
  start: string;
  end: string;
  path: number;
}

interface Games {
  [key: number]: {
    title: string;
    game: Game;
  };
}

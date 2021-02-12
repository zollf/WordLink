const level: Level = {
  title: 'hello',
  difficulty: 'easy',
  game: {
    start: 'FORTY',
    end: 'FIFTY',
    path: 5,
  },
};

const GameMocks = {
  gameId: 0,
  difficulty: 'EASY',
  inGame: false,
  loaded: false,
  error: false,
  game: level.game,
  gameTitle: 'hello',

  currentWord: level.game.start,
  selectedLetter: '',
  stepNumber: 0,
  path: [level.game.start],
  visited: { FORTY: true },
  completed: false,

  loadGame: jest.fn(),
  startGame: jest.fn(),
  getNewLetters: jest.fn(() => ['A', 'B', 'C']),
  isWord: jest.fn(),
  setSelectedLetter: jest.fn(),
  changeLetter: jest.fn(),
  resetCurrentWord: jest.fn(),
  undo: jest.fn(),
  clearGame: jest.fn(),
};

export default GameMocks;

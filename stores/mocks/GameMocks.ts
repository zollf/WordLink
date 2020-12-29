const GameMocks: GameStore = {
  gameId: 0,
  difficulty: '',
  inGame: false,
  loaded: false,
  error: false,
  game: {},

  currentWord: '',
  selectedLetter: '',
  stepNumber: 0,
  path: [],
  visited: {},
  completed: false,

  loadGame: jest.fn(),
  startGame: jest.fn(),
  getNewLetters: jest.fn(),
  isWord: jest.fn(),
  setSelectedLetter: jest.fn(),
  changeLetter: jest.fn(),
  resetCurrentWord: jest.fn(),
  undo: jest.fn(),
  clearGame: jest.fn(),
};

export default GameMocks;
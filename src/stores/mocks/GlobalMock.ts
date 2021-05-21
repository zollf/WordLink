const GlobalMock: Global = {
  _ready: true,
  currentPage: 'index',
  setCurrentPage: jest.fn(),
  previousPage: 'index',
  currentDifficultyOpen: '',
  setCurrentDifficultyOpen: jest.fn((d: string) => (GlobalMock.currentDifficultyOpen = d)),
  getDifficultyColor: jest.fn(() => ''),
  setStartingPage: jest.fn(),
  onStartingPage: false,
  setUserInfo: jest.fn(),
  userInfo: {
    username: 'jeff',
    points: 20,
    puzzles: {
      completed: 2,
      easy: [],
      medium: [],
      hard: [],
    },
    hintsUsed: 6,
    hardestDifficulty: 'Medium',
    starsEarnt: 69,
  },
  init: jest.fn(),
};

export default GlobalMock;

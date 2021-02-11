const GlobalMock: any = {
  currentPage: 'index',
  setCurrentPage: jest.fn(),
  previousPage: 'index',
  currentDifficultyOpen: '',
  setCurrentDifficultyOpen: jest.fn((d: string) => (GlobalMock.currentDifficultyOpen = d)),
  getDifficultyColor: jest.fn(() => ''),
  loadGame: jest.fn(),

  currentGameNumber: 1,
  currentGameDifficulty: 'easy',
};

export default GlobalMock;

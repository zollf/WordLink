const GlobalMock: Global = {
  currentPage: 'index',
  setCurrentPage: jest.fn(),
  previousPage: 'index',
  currentDifficultyOpen: '',
  setCurrentDifficultyOpen: jest.fn((d: string) => (GlobalMock.currentDifficultyOpen = d)),
  getDifficultyColor: jest.fn(() => ''),
  setStartingPage: jest.fn(),
  onStartingPage: false,
};

export default GlobalMock;

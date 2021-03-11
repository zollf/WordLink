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
  userInfo: {},
  init: jest.fn(),
};

export default GlobalMock;

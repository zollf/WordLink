import * as ReactNative from 'react-native';

jest.useFakeTimers();
jest.mock('@react-native-async-storage/async-storage', () => jest.fn());
jest.mock('@expo-google-fonts/raleway', () => ({
  useFonts: jest.fn(() => [true]),
}));

const animationMock = {
  end: jest.fn(),
  reset: jest.fn(),
  start: jest.fn(),
};

jest.doMock('react-native', () => {
  // Changes ReactNative Animations to Mocks
  return Object.setPrototypeOf(
    {
      // Mock out properties of an already mocked export
      LayoutAnimation: {
        ...ReactNative.LayoutAnimation,
        configureNext: jest.fn(),
      },
      Animated: {
        Value: jest.fn(),
        View: ReactNative.View,
        delay: jest.fn(),
        stagger: jest.fn(() => animationMock),
        parallel: jest.fn(() => animationMock),
        spring: jest.fn(() => animationMock),
        sequence: jest.fn(() => animationMock),
        timing: jest.fn(() => animationMock),
        start: jest.fn(() => animationMock),
      },
    },
    ReactNative,
  );
});
